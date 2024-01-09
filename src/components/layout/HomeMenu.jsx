import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
    return (
        <section>
            <div className="relative">
                <div className="h-48 w-48 absolute -left-10">
                    <Image src={"/sallad1.png"} fill layout="fill" 
                        objectFit="contain" alt="salad"
                    />
                </div>
                <div className="h-48 w-48 absolute -right-10">
                    <Image src={"/sallad2.png"} fill layout="fill" 
                        objectFit="contain" alt="salad"
                    />
                </div>
            </div>

            <SectionHeader subHeader={"Menu"} mainHeader={"Checkout"}/>

            <div className="grid grid-cols-3 gap-4 mx-auto mt-[135px] w-4/5">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            
            <section className="text-center my-8">
                <SectionHeader subHeader={"About us"} mainHeader={"Our story"}/>
            </section>
            <p className="max-w-2xl text-center mx-auto text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            </p>
            <p className="max-w-2xl text-center mx-auto text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
            </p>
            
            <section className="text-center mt-8">
                <SectionHeader subHeader={"Contact us"} mainHeader={"Don't hesitate"}/>
                <div className="mt-4">
                    <a href="tel:8169623489" className="text-3xl underline text-gray-500">
                        <h1>+91 8169623489</h1> 
                    </a>
                </div>
            </section>

            <footer className="border-t p-8 text-center text-gray-500 mt-16">
                &copy; 2024 All reights reserved
            </footer>
        </section>
    )
};

export default HomeMenu;