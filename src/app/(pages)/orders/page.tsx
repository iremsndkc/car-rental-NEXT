import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import { Order } from "@/app/types";
import OrderCard from "./OrderCard";

// proje geliştirme sürecinde farklı portlarda veya yayınalndıktan sonra
//farklı domain adresinde çalışabileceğinden istek atılan api adresini dinamik yaparız.

type ResType = {
  message: string;
  orders: Order[];
};

const getOrders = async (): Promise<ResType> => {
  const res = await fetch(`http://localhost:3000/api/orders`, {
    cache: "no-store",
  });
  return res.json();
};

const Page = async () => {
  const data = await getOrders();
  return (
    <div>
      <Header />
      <Container>
        <h2 className="mb-10 text-4xl font-bold">Siparişlerin</h2>
        <div className="grid gap-10">
          {data.orders.map((order, key) => (
            <OrderCard order={order} key={key} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Page;
