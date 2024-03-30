import { Image, Text, View } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { useEffect, useState } from "react";
import ProductCard from "@/components/Card/product_card";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const route = useRouter();
  const type = route.params.type;

  const [commodityData, setCommodityData] = useState([]);

  useEffect(() => {
    getCommodityData();
  }, []);

  const getCommodityData = async () => {
    const res = await Taro.request({
      url: `http://localhost:3000/commodity/type`,
      method: "GET",
      data: {
        type,
      },
    });
    setCommodityData(res.data);
  };

  return (
    <View className="h-screen w-full p-[30px]  bg-[#f8f8f8] overflow-auto">
      {commodityData.length > 0 &&
        commodityData.map((item) => {
          return <ProductCard {...(item as any)} />;
        })}
    </View>
  );
}
