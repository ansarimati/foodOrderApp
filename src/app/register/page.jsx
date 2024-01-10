
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
            </form>

            <div>
                <button>Login with google</button>
            </div>
        </section>
    )
};

export default Register;