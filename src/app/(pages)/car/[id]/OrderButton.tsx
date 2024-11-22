"use client";

import Loader from "@/app/components/Loader";
import { Car } from "@/app/types";
import { useState } from "react";

const OrderButton = ({ car }: { car: Car }) => {
  const [isLoading, setIsLoading] = useState(false);
  // sipariş butonuna tıklanınca
  const handleClick = () => {
    setIsLoading(true);
    // 1) backende ödeme sayfasının linkini oluşturması için istek atıyoruz.
    fetch("http://localhost:3000/api/checkout", {
      method: "Post",
      body: JSON.stringify(car),
    })
      // 2) backend buraya satın alma sayfasının linkini gönderecek.
      .then((res) => res.json())
      // 3) kullanıcıyı satın alma sayfasına yönlendir.
      .then((data) => {
        window.location.href = data.url;
      })
      // 4) son olarak isloading statini false çektik.
      .finally(() => setIsLoading(false));
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className="bg-red-500 w-full p-2 rounded-lg
text-white font-bold transition hover:bg-red-600"
    >
      {isLoading ? <Loader /> : "Aracı Kirala"}
    </button>
  );
};

export default OrderButton;
