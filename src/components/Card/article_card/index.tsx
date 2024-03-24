import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";

export interface IAppProps {
  _id: string;
  title: string;
  content: string;
  description: string;
  keyword: string;
  star: number;
  eyes: number;
  author: string;
  swiperItems: string[];
}

export default function App(props: IAppProps) {
  const { title, description, keyword, star, eyes, swiperItems, author, _id } =
    props;

  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/article_detail/index?id=${_id}`,
    });
  };
  return (
    <View
      onClick={handleClick}
      className="w-full h-[710px] bg-white pt-[27px] px-[15px] rounded-lg mb-[20px]"
    >
      <View className="font-bold mb-[20px] text-base">{title}</View>
      <View className="text-[#808490] text-sm mb-[15px] line-clamp-1">
        {description}
      </View>
      <View className="h-[375px] w-full  flex flex-wrap justify-evenly mb-[10px]">
        {swiperItems.length > 0 &&
          swiperItems.map((item) => {
            return <Image className="w-[32%] h-[32%]" src={item} />;
          })}
      </View>
      <View className="text-[#808490] text-sm px-[20px]  mb-[15px]">
        {keyword}
      </View>
      <View className="flex justify-between px-[20px] mb-[20px]">
        <View className="text-[#808490]">{author}</View>
        <View>
          <Text className="mr-[20px] text-[#808490]">
            <AtIcon value="heart" size="18" color="#808490" />
            <Text className="ml-[10px]">{star}</Text>
          </Text>
          <Text className="text-[#808490]">
            <AtIcon value="clock" size="18" color="#808490" />
            <Text className="ml-[10px]">{eyes}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
