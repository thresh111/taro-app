import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function App(props) {
  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/machine_plan/index?id=${props._id}`,
    });
  };
  return (
    <View onClick={handleClick} className=" w-[33%] mb-[1%]">
      <Image src={props.cover} className=" h-[150px] w-[200px]" />
      <View className="text-center text-[#999999] text-sm">{props.title}</View>
    </View>
  );
}
