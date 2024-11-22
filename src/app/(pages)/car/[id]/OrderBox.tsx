import Image from "next/image";
import pp from "@/app/assets/pp.png";
import konum from "@/app/assets/icons/konum.svg";
import phone from "@/app/assets/icons/phone.svg";
import OrderButton from "./OrderButton";
import { Car } from "@/app/types";

const OrderBox = ({ car }: { car: Car }) => {
  return (
    <div
      className="border shadow rounded-md p-5 max-xl:mt-10
    w-full xl:col-span-2"
    >
      <div className="flex gap-5">
        <Image src={pp} alt="profile" />

        <div className="text-xl">
          <h2 className="font-semibold">Meris Galeri</h2>
          <p>İstanbul, Maltepe</p>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={konum} alt="konum" />
          <p>Lokasyonu Gör</p>
        </div>

        <div className="flex gap-1 items-center cursor-pointer">
          <Image src={phone} alt="phone" />
          <p>+905557469874</p>
        </div>
      </div>

      <OrderButton car={car} />

      <div
        className="bg-green-500 w-full text-center p-2 rounded-lg
      text-white font-bold transition hover:bg-green-600 mt-5"
      >
        <a href="https://wa.me/905557469874">Whatsapp</a>
      </div>
    </div>
  );
};

export default OrderBox;
