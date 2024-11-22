import check from "@/app/assets/icons/check.png";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10">
          <Image width={80} height={80} src={check} alt="checkmark" />
          <p className="text-center text-4xl font-semibold">
            Tebrikler, Ödemeniz Başarıyla Alındı!
          </p>
        </div>
      </div>
      <div className="h-[50%] p-10 mt-10 text-center">
        <p className="text-lg">
          Aracınızı Naıl Teslim Alacağınza Dair Yakında Bir Mail Alacaksınız.
        </p>
        <p className="mt-5 mb-10">Lütfen Kontrol Ediniz.</p>
        <Link
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
          href="/orders"
        >
          Siparişlerim
        </Link>

        <br />
        <br />
        <br />

        <Link
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
          href="/home"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default Page;
