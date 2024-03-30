import { View } from "@tarojs/components";
import MachineCard from "@/components/Card/machine_card";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";

export default function App() {
  const [res1, setRes1] = useState([]);
  const [res2, setRes2] = useState([]);
  const [res3, setRes3] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await Taro.request({
      url: "http://localhost:3000/pcplan",
      method: "GET",
    });
    if (res.data) {
      const res1 = res.data.filter((item) => item.type === "dingzhi");
      setRes1(res1);
      const res2 = res.data.filter((item) => item.type === "mini");
      setRes2(res2);
      const res3 = res.data.filter((item) => item.type === "yuanchuang");
      setRes3(res3);
    }
  };
  return (
    <View className="h-screen overflow-auto w-full bg-[#f8f8f8] px-[30px] pt-[80px]">
      {/* 来图定制 */}
      <View className="w-full  pt-[30px]  px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">来图定制</View>
        <View className="flex flex-wrap">
          {res1.map((item: any, index: number) => {
            return <MachineCard {...item} key={index} />;
          })}
        </View>
      </View>
      {/* mini */}
      <View className="w-full  pt-[30px]  px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">mini</View>
        <View className="flex flex-wrap">
          {res2.map((item: any, index: number) => {
            return <MachineCard {...item} key={index} />;
          })}
        </View>
      </View>
      {/* 原创 */}
      <View className="w-full  pt-[30px]  px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">原创主机</View>
        <View className="flex flex-wrap">
          {res3.map((item: any, index: number) => {
            return <MachineCard {...item} key={index} />;
          })}
        </View>
      </View>
    </View>
  );
}
