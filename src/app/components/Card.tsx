import Image from "next/image";
import { Car } from "../types";
import icon1 from "@/app/assets/icons/icon1.svg";
import icon2 from "@/app/assets/icons/icon2.svg";
import icon3 from "@/app/assets/icons/icon3.svg";
import arrow from "@/app/assets/icons/arrow.svg";
import Link from "next/link";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  // ekrana basarken kod tekrarı oluşmaması için bir dizi tanımladık.
  const arr = [
    {
      icon: icon1,
      name: car.mileage + " Miles",
    },
    {
      icon: icon2,
      name: car.fuelType,
    },
    {
      icon: icon3,
      name: car.transmission,
    },
  ];

  return (
    <div className="border shadow rounded-2xl hover:shadow-lg">
      <div className="relative h-[200px]">
        <Image
          fill
          src={car.imageUrl}
          alt={car.make}
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="p-10 py-5 sm:px-5">
        <h2 className="text-xl font-semibold">
          {car.make} {car.model}
        </h2>

        <hr className="border-[#E9E9E9] border-2 mt-2 mb-4" />

        <div className="flex justify-between">
          {arr.map((item) => (
            <div className=" flex flex-col gap-2 items-center ">
              <Image src={item.icon} alt="icon" />
              <p className="text-lg sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>

        <hr className="border-[#E9E9E9] border-2 mt-4 mb-3" />

        <div className="flex justify-between text-2xl sm:text-xl">
          <p className="font-semibold">${car.price}</p>
          <Link
            href={`/car/${car._id}`}
            className="text-red-500 text-2xl sm:text-xl flex 
          items-center gap-2 hover:text-red-800 transition"
          >
            Detay
            <Image src={arrow} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
