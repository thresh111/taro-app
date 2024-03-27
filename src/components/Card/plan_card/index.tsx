import { Navigator, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const handleClick = () => {
    Taro.navigateTo({
      url: ``,
    });
  };
  return (
    <View
      onClick={handleClick}
      className="w-full  h-[1000px]  rounded-2xl mb-[100px]"
    >
      <View className="text-lg pt-[20px] bg-[#222222] rounded-t-2xl text-white h-[150px] flex-col justify-center items-center text-center">
        <View>方案一</View>
        <Text className="font-bold">售价 ¥ 7343</Text>
      </View>
      <View className="bg-[#171717] rounded-b-2xl h-[900px] pt-[40px]">
        <View className="text-center text-white font-bold text-xl mb-[40px]">
          配置
        </View>
        <View className=" w-full px-[30px] text-[#ccc]">
          <View className="mb-[20px]">华硕 GT502 弹药库 白-EVA绫波丽</View>
          <View className="mb-[20px]">Intel Core i5-13400F</View>
          <View className="mb-[20px]">微星 RTX 4060 VENTUS 2X BLACK 8G OC</View>
          <View className="mb-[20px]">微星 PRO B760M-E DDR4</View>
          <View className="mb-[20px]">
            美商海盗船 复仇者LPX8GB DDR4 3200 内存条
          </View>
          <View className="mb-[20px]">WD BLACK SN770 500GB 固态硬盘</View>
          <View className="mb-[20px]">九州风神 玄冰500 白色 ARGB</View>
          <View className="mb-[70px]">九州风神 PK600D 铜牌电源</View>
        </View>

        <View className="w-full h-[100px] text-lg flex justify-center items-center  rounded-full  [border:1px_solid_#ccc] text-white">
          选择
        </View>
      </View>
    </View>
  );
}
