import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export default function VideoCard({ title, author, data, url, imgUrl }) {
  const handleClick = () => {
    Taro.navigateTo({ url: `/pages/video_course/detail?url=${url}` });
  };
  return (
    <View className="h-[300px] w-full  [borderBottom:1px_solid_gray] flex justify-between items-center">
      <View className="h-[200px] w-[350px]">
        <Image
          className="h-[200px] w-[350px] rounded-md"
          src={imgUrl}
          onClick={handleClick}
        />
      </View>
      <View className="ml-[30px]">
        <View className="mb-[60px] text-[30px] line-clamp-2">{title}</View>
        <View className="flex items-center justify-between">
          <View className="flex items-center">
            <Text className="text-[20px] text-[#979797]">{author}</Text>
          </View>
          <View className="text-[20px] text-[#979797]">{data}</View>
        </View>
      </View>
    </View>
  );
}
