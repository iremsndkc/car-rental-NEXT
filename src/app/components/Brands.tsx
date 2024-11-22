import Image from "next/image";
import { brands } from "../constants";
import Container from "./Container";

const Brands = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl font-bold mt-10">
        Premium Markalarımızı Keşfedin
      </h1>

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
      gap-5 mt-5"
      >
        {brands.map((item) => (
          <div
            className="bg-white shadow rounded-lg p-3 flex flex-col items-center
          cursor-pointer transition hover:shadow-lg"
          >
            <Image width={70} height={70} src={item.icon} alt="brand logo" />

            <h4 className="text-base">{item.name}</h4>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Brands;
