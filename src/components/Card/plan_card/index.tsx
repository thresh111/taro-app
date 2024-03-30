import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export default function App(props) {
  const [data, setData] = useState<any>();

  const handleClick = () => {
    const title = "请加客服wx: diydiydiydiy";
    Taro.showModal({
      title,
      cancelText: "取消",
      confirmText: "确定",
      success: async (res) => {
        if (res.confirm) {
          try {
            await Taro.setClipboardData({
              data: title,
            });

            Taro.showToast({
              title: "已复制到剪贴板",
              icon: "success",
              duration: 2000,
            });
          } catch (err) {
            console.error("复制失败", err);
          }
        }
      },
    });
  };
  useEffect(() => {
    setData(JSON.parse(props.item));
  }, []);

  return (
    <>
      {data && (
        <View className="w-full  h-[1000px]  rounded-2xl mb-[30px]">
          <View className="text-lg pt-[20px] bg-[#222222] rounded-t-2xl text-white h-[150px] flex-col justify-center items-center text-center">
            <View>方案一</View>
            <Text className="font-bold">售价 ¥ {data.price}</Text>
          </View>
          <View className="bg-[#171717] rounded-b-2xl h-[800px] pt-[40px]">
            <View className="text-center text-white font-bold text-xl mb-[40px]">
              配置
            </View>
            <View className=" w-full px-[30px] text-[#ccc]">
              <View className="mb-[20px]">{data.box}</View>
              <View className="mb-[20px]">{data.cpu}</View>
              <View className="mb-[20px]">{data.xianka}</View>
              <View className="mb-[20px]">{data.zhuban}</View>
              <View className="mb-[20px]">{data.neicun}</View>
              <View className="mb-[20px]">{data.yingpan}</View>
              <View className="mb-[20px]">{data.sanre}</View>
              <View className="mb-[70px]">{data.dianyuan}</View>
            </View>

            <View
              onClick={handleClick}
              className="w-full h-[100px] text-lg flex justify-center items-center  rounded-full  [border:1px_solid_#ccc] text-white"
            >
              咨询客服
            </View>
          </View>
        </View>
      )}
    </>
  );
}
