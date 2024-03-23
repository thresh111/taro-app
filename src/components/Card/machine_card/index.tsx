import { View, Image, Navigator } from "@tarojs/components";
import mini1 from "@/assets/images/mini1.png";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Navigator url="/pages/machine_plan/index" className=" w-[33%] mb-[1%]">
      <Image src={mini1} className=" h-[150px] w-[200px]" />
      <View className="text-center text-[#999999] text-sm">文案文案</View>
    </Navigator>
  );
}
