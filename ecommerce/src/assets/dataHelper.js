import { useEffect, useState } from "react";
import client from "../providers/client";

const GetData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const request = async () => {
      const { data } = await client.from("shoe").select("*");
      console.log(data);
      setData(data);
    };
    request();
  }, []);
  const newData = data?.map(function (item) {
    return {
      brand: item.brand,
      currency: item.currency,
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
    };
  });
  return newData;
};

export default GetData;
