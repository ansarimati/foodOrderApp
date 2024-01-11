"use client"

import Image from "next/image";
import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "Application/json"}
        })
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl font-semibold">
                Register
            </h1>

            <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} 
                    onChange={(e) => setPassword(e.target.value) }/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">Login with providers</div>
                <button className="flex gap-4 items-center justify-center">
                    <Image src={"/google.png"} width={24} height={24} alt="google"/>
                    Login with google
                </button>
            </form>

            <div>
                
            </div>
        </section>
    )
};

export default Register;