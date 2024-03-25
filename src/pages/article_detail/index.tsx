import { Image, Text, View } from "@tarojs/components";
import { Swiper, SwiperItem } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";

import { useEffect, useState } from "react";

export interface IAppProps {}

function LoadingSkeleton() {
  return (
    <View className="w-full h-screen overflow-auto pb-[80px] bg-[#f8f8f8]">
      {/* 模拟 Swiper 骨架屏 */}
      <View className="h-[350px] mb-[70px] rounded-sm bg-white">
        {/* 可以添加一些动态线条动画来模拟图片加载前的效果 */}
        <View className="w-full h-[150px] rounded-md bg-gray-300 animate-pulse" />
        {/* 如果有多张图片，重复此结构 */}
      </View>

      {/* 文章部分的骨架屏 */}
      <View className="px-[40px]">
        {/* 标题骨架屏 */}
        <View className="text-lg font-bold mb-[30px] line-clamp-2 bg-gray-300 rounded-md animate-pulse h-[40px]" />

        {/* 内容骨架屏 */}
        <Text className="text-base text-[#666666] line-clamp-3 bg-gray-300 rounded-md animate-pulse h-[60px] w-fit" />
      </View>
    </View>
  );
}

export default function App(props: IAppProps) {
  const route = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const id = route.params.id;

  const [article, setArticle] = useState<any>();

  useEffect(() => {
    id && getArticle();
  }, []);

  const getArticle = async () => {
    const res = await Taro.request({
      url: `http://localhost:3000/article/${id}`,
      method: "GET",
      success() {
        setIsLoading(false);
      },
    });

    setArticle(res.data);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <View className="w-full h-screen overflow-auto pb-[80px] bg-[#f8f8f8]">
          {/* 当数据加载完成后，展示真实的 Swiper 和文章内容 */}
          <Swiper
            className="h-[350px] mb-[70px] "
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            {article.swiperItems.map((item, index) => (
              <SwiperItem key={index}>
                <Image className="w-full" src={item} mode="aspectFit" />
              </SwiperItem>
            ))}
          </Swiper>

          {/* 文章内容 */}
          <View className="px-[40px] ">
            <View className="text-lg font-bold mb-[30px]">{article.title}</View>
            <Text className="text-base text-[#666666]">{article.content}</Text>
          </View>
        </View>
      )}
    </>
  );
}
