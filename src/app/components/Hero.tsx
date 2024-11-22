import Image from "next/image";
import { models } from "../constants";

const Hero = () => {
  return (
    <div
      className="h-[80vh] grid place-items-center 
      bg-[linear-gradient(#00000084,#00000084),url('./assets/cars.webp')] 
      bg-center bg-cover text-white bg-[#00000084]"
    >
      <div className="text-center flex flex-col gap-8">
        <p>Yakınındaki Kiralık Araçları Keşfet</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Senin İçin En Mükemmel Aracı Bul
        </h1>

        <p>Kendine uygun modeli belirle</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((item) => (
            <button
              className="px-3 py-1 rounded-full bg-gray-100/25 transition
               hover:bg-red-500 flex gap-2 items-center"
            >
              <Image src={item?.icon} alt="car icon" />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
