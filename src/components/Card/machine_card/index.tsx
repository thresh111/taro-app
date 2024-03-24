import { View, Image, Navigator } from "@tarojs/components";
import mini1 from "@/assets/images/mini1.png";
import Taro from "@tarojs/taro";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/machine_plan/index`,
    });
  };
  return (
    <View onClick={handleClick} className=" w-[33%] mb-[1%]">
      <Image src={mini1} className=" h-[150px] w-[200px]" />
      <View className="text-center text-[#999999] text-sm">文案文案</View>
    </View>
  );
}
