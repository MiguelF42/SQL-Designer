import {useState} from 'react';
import {
  getBezierPath,
  useStore,
  BaseEdge,
  EdgeLabelRenderer,
  useReactFlow
} from '@xyflow/react';

import EdgeMenu from '../EdgeMenu';
 
export const getSpecialPath = (
  { sourceX, sourceY, targetX, targetY },
  offset,
) => {
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;
 
  return `M ${sourceX} ${sourceY} Q ${centerX} ${
    centerY + offset
  } ${targetX} ${targetY}`;
};
 
export default function CustomEdge({
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}) {

  const { setEdges } = useReactFlow();

  const [mousePosition,setMousePosition] = useState(false);
  const [dependancy,setDependancy] = useState(1);

  const setDep = (e) => {
    setDependancy(e);
    setMousePosition(false);
  }

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(mousePosition);
  }

  const deleteEdge = () => {
    setEdges((edges) => edges.filter((e) => e.source !== source || e.target !== target));
    setMousePosition(false);
  }

  const isBiDirectionEdge = useStore((s) => {
    const edgeExists = s.edges.some(
      (e) =>
        (e.source === target && e.target === source) ||
        (e.target === source && e.source === target),
    );
 
    return edgeExists;
  });
 
  const edgePathParams = {
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  };
 
  let path = '';
 
  if (isBiDirectionEdge) {
    path = getSpecialPath(edgePathParams, sourceX < targetX ? 25 : -25);
  } else {
    [path] = getBezierPath(edgePathParams);
  }
 
  return (
    <BaseEdge path={path} markerEnd={markerEnd} interactionWidth={10} onClick={() => console.log('test')} className='bg-red-500'>
      <EdgeLabelRenderer>
        {mousePosition && (<EdgeMenu dependancy={dependancy} setDependancy={setDep} position={mousePosition} setPosition={setMousePosition} deleteEdge={deleteEdge}/>)}
      </EdgeLabelRenderer>
    </BaseEdge>
  );
}