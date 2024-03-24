import { Image, Navigator, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
export interface IAppProps {
  cover: string;
  _id: string;
  title: string;
  price: number;
  buyNums: number;
}

export default function App(props: IAppProps) {
  const { _id, cover, title, price, buyNums } = props;

  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/product_detail/index?id=${_id}`,
    });
  };
  return (
    <View
      onClick={handleClick}
      className="w-[48%]  bg-white h-[520px] mb-[20px]"
    >
      <Image className="h-[300px] w-[100%]" src={cover} />
      <View className="h-[200px] w-full py-[40px] px-[20px] flex-col mb-[40px] justify-between">
        <View className="text-sm text-ellipsis overflow-hidden  mb-[40px] line-clamp-2">
          {title}
        </View>
        <View className="flex justify-between items-center">
          <Text className="font-bold">{price}</Text>
          <Text className="text-[#88878f]">{buyNums}人购买</Text>
        </View>
      </View>
    </View>
  );
}
