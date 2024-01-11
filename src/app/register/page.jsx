import Image from "next/image";

const Register = () => {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl font-semibold">
                Register
            </h1>

            <form className="block max-w-xl mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
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