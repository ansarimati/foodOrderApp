import Image from "next/image";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 hover:bg-primary hover:shadow-2xl hover:shadow-black p-4 rounded-lg text-center transition-all">
        <img src="/pizza.png" alt="Pizza"/>
        <h4 className="font-semibold text-xl my-3">
            Pepperoni Pizza
        </h4>
        <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amert, consectetur adipsisicing eli
        </p>  
        <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
            Add to cart $12
        </button>
    </div>
  );
};

export default MenuItem;
