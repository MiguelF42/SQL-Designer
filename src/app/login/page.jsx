"use client";
import LoginForm from "@/components/Login/LoginForm";

export default function login() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-row">
            <div className="w-full xl:w-1/2 bg-[#1C1C1C] h-full flex items-center justify-center">
                <LoginForm />
            </div>
            <div className="hidden xl:block w-1/2 h-full">

            </div>
        </div>
    )
}