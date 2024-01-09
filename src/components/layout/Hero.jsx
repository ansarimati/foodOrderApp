
import Image from "next/image";
import RightIcon from "../icons/RightIcon";


const Hero = () => {
    return (
        <section className="hero">

                <div className="py-12">
                    <h1 className="text-4xl font-semibold mt-3">
                        Everything <br /> is better <br /> with a 
                        <span className="text-primary">
                        &nbsp;Pizza
                        </span>
                    </h1>
                    <p className="my-6 to-gray-500 text-sm">
                        Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                    </p>

                    <div className="flex gap-5">
                        <button className="bg-primary text-white flex items-center gap-1 rounded-full px-8 py-2 uppercase text-sm">
                            Order Now  <RightIcon />
                        </button>
                        <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                            Learn more <RightIcon />
                        </button>
                    </div>
                </div>    
                
                <div className="relative">
                    <Image src={'/pizza.png'} fill style={{ objectFit: "contain" }} alt={'pizza'}/>
                </div>
        </section>
    )
};

export default Hero;