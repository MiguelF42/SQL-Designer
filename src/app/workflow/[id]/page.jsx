"use client";

import React, {useCallback, useState, useEffect} from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';

import config from "../../../config";

import '@xyflow/react/dist/style.css';
import {ConnectionMode, ReactFlowProvider, SmoothStepEdge} from "reactflow";
import {Table} from "../../../components/Workflow/Table";
import {Menu} from "../../../components/WorkflowMenu/Menu";
import {MenuNode} from "../../../components/WorkflowMenu/MenuNode";
import Navbarre from "../../../components/WorkflowMenu/NavBarre";
import { get, patch } from '@/modules/fetchHandler';
import { isUserToken } from '@/modules/tokenHandler';

import CustomEdge from "../../../components/Workflow/CustomEdge";

const initialNodes = [];
const initialEdges = [];

const nodeTypes = {
    Table: Table
};

const edgeTypes = {
    customEdge: CustomEdge// Assurez-vous que SmoothStepEdge est correctement importé
};

export default function Workflow({params}) {
    const token = isUserToken('login');
    // params.id pour récupérer l'id du projet après faudra faire la requête vers le backend pour récupérer les données du workflow
    // faut ajouter le code qui push la data du workflow vers le backend
    // et on sera pas mal

    const [isGet, setIsGet] = useState(false);
    const [project, setProject] = useState({});
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const pushScheme = () => {
        const body = {
            nodes: localStorage.getItem('nodes') ? JSON.parse(localStorage.getItem('nodes')) : nodes,
            edges: localStorage.getItem('edges') ? JSON.parse(localStorage.getItem('edges')) : edges,
        }
        console.log(body.edges);
        patch(`project/${params.id}/workflow`, body, token);
    }

    useEffect(() => {
        if (!isGet) {

            get(`project/${params.id}`, token).then((response) => {
                if (response.status === 200) {
                    setNodes(response.data.dbScheme.nodes || []);
                    setEdges(response.data.dbScheme.edges || []);
                    setProject(response.data);
                }
                setIsGet(true);
            });
        }
    
        setInterval(() => {
            pushScheme();
        },config.pushWorkflowTimeout);
    },[]);



    const addNode = () => {
        setNodes((nds) => [...nds, createNewNode(String(nds.length + 1), 'Nouvelle table')]);
    };

    const onConnect = useCallback(
        (params) => {
            const newEdge = {
                ...params,
                type: 'customEdge' // Assurez-vous que le type est correctement défini ici
            };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        []
    );

    const updateNode = (node) => {
        const index = nodes.findIndex(n => n.id === node.id);
        const newNodes = [...nodes];
        newNodes[index] = node;
        setNodes(newNodes);
    }

    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        localStorage.setItem('nodes', JSON.stringify(nodes));
        if(selectedNode) {
            setSelectedNode(nodes.find(n => n.id === selectedNode.id));
        }
    },[nodes]);

    useEffect(() => {
        localStorage.setItem('edges', JSON.stringify(edges));
        console.log(edges);
    },[edges]);

    return (
        <ReactFlowProvider>
            <div className="bg-[#1C1C1C] h-screen v-screen">
                <Navbarre pushScheme={pushScheme} projectName={project.name}/>
                <div style={{height : 'calc(-56px + 100vh)'}}>
                {selectedNode ? (
                    <MenuNode selectedNode={selectedNode} setSelectedNode={setSelectedNode} updateNode={updateNode}/>
                ) : (
                    <Menu addNode={addNode} nodes={nodes} setSelectedNode={setSelectedNode} selectedNode={selectedNode} projectName={project.name}/>
                )}
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    fitView
                />
                </div>
            </div>
        </ReactFlowProvider>
    );
}

function createNewNode(id, label) {
    return { id: id, position: { x: 0, y: 0 }, data: { label: label, columns: [] }, type: 'Table' };
}
