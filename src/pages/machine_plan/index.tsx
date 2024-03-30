import { Image, Text, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro, { useRouter } from "@tarojs/taro";
import PlanCard from "@/components/Card/plan_card/index";
import { useEffect, useState } from "react";

export default function App() {
  const route = useRouter();
  const id = route.params.id;

  const [data, setData] = useState<any>({});

  const handleClick = () => {
    Taro.pageScrollTo({
      scrollTop: 750,
      duration: 300,
    });
  };

  useEffect(() => {
    fetchDataById();
  }, [id]);

  const fetchDataById = async () => {
    const res = await Taro.request({
      url: `http://localhost:3000/pcplan/${id}`,
      method: "GET",
    });

    setData(res.data);
  };
  return (
    <View>
      <View className="h-[100vh] w-full overflow-auto bg-gradient-to-b from-[#dbf6ff] to-[#b9e1eb]">
        {/* 头部图片 */}
        <Image src={data.cover} className="w-full h-[700px] mb-[40px]" />
        <Text className="flex justify-center items-center w-full px-[40px] h-[200px]">
          {data.content}
        </Text>
        <View className="h-[calc(100vh-940px)] flex justify-center items-center">
          <AtButton type="primary" onClick={handleClick}>
            选择配置
          </AtButton>
        </View>
      </View>
      <View className="h-full bg-pink-400 w-full pt-[60px] px-[40px]">
        {/* 方案card */}
        {Array.isArray(data.plan) &&
          data.plan.length > 0 &&
          data.plan.map((item: any, index: number) => {
            return <PlanCard item={item} key={index} />;
          })}
      </View>
    </View>
  );
}
