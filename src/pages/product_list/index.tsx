import { Image, Text, View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useEffect } from "react";
import ProductCard from "@/components/Card/product_card";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const route = useRouter();

  return (
    <View className="h-screen w-full p-[30px]  bg-[#f8f8f8] overflow-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => {
        return <ProductCard />;
      })}
    </View>
  );
}
