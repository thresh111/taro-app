import { Image, Text, View } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtAvatar } from "taro-ui";

// export interface IVideoCardProps {
//   picture: string;
//   title: string;
//   author: string;
//   date: string;
// }

export default function VideoCard(props: IVideoCardProps) {
  return (
    <View className="h-[300px] w-full  [borderBottom:1px_solid_gray] flex justify-between items-center">
      <View className="h-[200px] w-[350px]">
        <Image
          className="h-[200px] w-[350px] rounded-md"
          src="https://i0.hdslb.com/bfs/archive/227f38510f1cb11deaa5ec8050d14216b9b6a096.jpg@672w_378h_1c_!web-home-common-cover.avif"
        />
      </View>
      <View className="ml-[50px]">
        <View className="mb-[60px] text-[30px] line-clamp-2">
          收到主机后如何拆箱
        </View>
        <View className="flex items-center justify-between">
          <View className="flex items-center">
            <Text className="text-[20px] text-[#979797]">DIY实验室</Text>
          </View>
          <Text className="text-[20px] text-[#979797]">2022.11.10</Text>
        </View>
      </View>
    </View>
  );
}
