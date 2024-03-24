import { Image, Text, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <View className="w-full h-[710px] bg-white pt-[27px] px-[15px] rounded-lg mb-[20px]">
      <View className="font-bold mb-[20px] text-base">
        在小配列键盘火热的当下，还有人喜欢三键区的键盘吗?
      </View>
      <View className="text-[#808490] text-sm mb-[15px] line-clamp-1">
        回望过去，经典始终还是经典，不论时间如何改变。
      </View>
      <View className="h-[375px] w-full  flex flex-wrap justify-evenly mb-[10px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return (
            <Image
              className="w-[32%] h-[32%]"
              src="https://pic.imgdb.cn/item/65fe4c8c9f345e8d03cbd74e.jpg"
            />
          );
        })}
      </View>
      <View className="text-[#808490] text-sm  mb-[15px]">客制化键帽</View>
      <View className="flex justify-between mb-[20px]">
        <View className="text-[#808490]">小名实验室</View>
        <View>
          <Text className="mr-[20px] text-[#808490]">
            <AtIcon value="heart" size="18" color="#808490" />
            <Text className="ml-[10px]">3</Text>
          </Text>
          <Text className="text-[#808490]">
            <AtIcon value="clock" size="18" color="#808490" />
            <Text className="ml-[10px]">434</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
