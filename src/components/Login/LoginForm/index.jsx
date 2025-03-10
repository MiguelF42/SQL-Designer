import {get, post} from "@/modules/fetchHandler";
import {useEffect, useState} from "react";
import {permanentRedirect} from "next/navigation";
import { setUserToken } from "@/modules/tokenHandler";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if(isLogin) {
            permanentRedirect(`/project`);
        }
    }, [isLogin]);

    async function login() {
        const body = {
            email: email,
            password: password
        }
        const res = await post('auth/login', body)
        if(res.status === 200) {
            setUserToken(res.token)
            setIsLogin(true)
        } else if(res.errors) {
            setError(res.errors[0].message)
        }
    }

    async function loginGithub() {
        const res = await get('auth/github/redirect')
        window.location.href = res.url
    }

    async function loginGoogle() {
        const res = await get('auth/google/redirect')
        window.location.href = res.url
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-4xl font-bold mb-8">Welcome</h1>
            <div className="flex flex-col gap-y-5 w-full items-center">
                {error && <p className="text-red-500">{error}</p>}
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email adress"
                       className="bg-[#383838] rounded-full px-3 py-2 text-lg w-2/4"></input>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"
                       className="bg-[#383838] rounded-full px-3 py-2 text-lg w-2/4"></input>
                <button
                    onClick={() => login()} className="border-2 bg-[#181818] border-[#383838] rounded-full px-3 py-2 text-lg w-2/4 flex-row items-center justify-center flex hover:bg-[#383838] mb-5">Login <img className="w-5 ml-2" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/login-rounded-right.png" alt="login"/></button>
            </div>
            <div className="mt-2 w-full flex flex-col items-center">
                <p className="text-lg mb-5">Or</p>
                <button onClick={() => loginGoogle()} className="border-2 bg-[#181818] border-[#383838] rounded-full px-3 py-2 text-lg w-2/4 flex-row items-center justify-center flex hover:bg-[#383838] mb-5">Continue with Google <img className="w-5 ml-2" src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"  alt="google"/></button>
                <button onClick={() => loginGithub()} className="border-2 bg-[#181818] border-[#383838] rounded-full px-3 py-2 text-lg w-2/4 flex-row items-center justify-center flex hover:bg-[#383838]">Continue with GitHub <img className="w-5 ml-2" src="https://img.icons8.com/m_sharp/200/FFFFFF/github.png"  alt="google"/></button>
                <p className="mt-5 text-[#8e8e8e]">Don't have an account ? <a className="text-white hover:underline">Register</a></p>
            </div>
        </div>
    )
}