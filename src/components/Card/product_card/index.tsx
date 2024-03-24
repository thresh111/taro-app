import { Image, Text, View } from "@tarojs/components";
import xsq from "@/assets/images/xsq.png";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <View className="w-full h-[200px] flex py-[20px] px-[20px] rounded-lg bg-white mb-[40px]">
      <Image src={xsq} className="w-[180px] h-[180px] mr-[30px]" />
      <View className="flex-1 ">
        <View className="text-[#ccc] text-sm mb-[40px] line-clamp-2">
          AOC Q27G3S 27英寸2K 170HZ 1ms响应 旋转升降 游戏电竞显示屏
        </View>
        <View>
          <Text className="font-semibold mr-[40px]">¥ 1299</Text>
          <Text className="text-[#ccc] line-through">¥ 1799</Text>
        </View>
      </View>
    </View>
  );
}
