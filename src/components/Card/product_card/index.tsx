import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export interface IAppProps {
  _id: string;
  title: string;
  cover: string;
  price: number;
  originalPrice: number;
}

export default function App(props: IAppProps) {
  const { title, cover, price, originalPrice, _id } = props;

  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/product_detail/index?id=${_id}`,
    });
  };
  return (
    <View
      onClick={handleClick}
      className="w-full h-[200px] flex py-[20px] px-[20px] rounded-lg bg-white mb-[40px]"
    >
      <Image src={cover} className="w-[180px] h-[180px] mr-[30px]" />
      <View className="flex-1 ">
        <View className="text-[#ccc] text-sm mb-[40px] line-clamp-2">
          {title}
        </View>
        <View>
          <Text className="font-semibold mr-[40px]">¥ {price}</Text>
          <Text className="text-[#ccc] line-through">¥ {originalPrice}</Text>
        </View>
      </View>
    </View>
  );
}
