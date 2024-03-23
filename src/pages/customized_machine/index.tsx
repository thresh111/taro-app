import { Image, View } from "@tarojs/components";
import MachineCard from "@/components/Card/machine_card";

export default function App() {
  return (
    <View className="h-screen overflow-auto w-full bg-[#f8f8f8] px-[30px] pt-[80px]">
      {/* 来图定制 */}
      <View className="w-full h-[750px] pt-[30px] px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">来图定制</View>
        <View className="flex flex-wrap justify-evenly">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <MachineCard />;
          })}
        </View>
      </View>
      {/* mini */}
      <View className="w-full h-[750px] pt-[30px] px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">mini</View>
        <View className="flex flex-wrap justify-evenly">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <MachineCard />;
          })}
        </View>
      </View>
      {/* 原创 */}
      <View className="w-full h-[750px] pt-[30px] px-[30px] bg-white rounded-lg mb-[40px]">
        <View className="font-bold text-lg mb-[20px]">原创主机</View>
        <View className="flex flex-wrap justify-evenly">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <MachineCard />;
          })}
        </View>
      </View>
    </View>
  );
}
