import { Image, Text, View, Swiper, SwiperItem } from "@tarojs/components";
import { AtFloatLayout, AtIcon, AtTabBar } from "taro-ui";
import swiper1 from "@/assets/images/diyKeyboard1.jpg";
import swiper2 from "@/assets/images/diyKeyboard2.jpg";
import swiper3 from "@/assets/images/diyKeyboard3.jpg";
import { useEffect, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [floatOpen, setFloatOpen] = useState(false);

  const route = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const id = route.params.id;

  const [commodity, setCommodity] = useState<any>();

  useEffect(() => {
    id && getCommodityDetail();
  }, []);

  const getCommodityDetail = async () => {
    const res = await Taro.request({
      url: `http://localhost:3000/commodity/${id}`,
      method: "GET",
      success() {
        setIsLoading(false);
      },
    });

    setCommodity(res.data);
  };

  return (
    <>
    {isLoading? <SkeletonComponent/> : <>
    <View className="w-full h-screen">
        {/* 轮播图 */}
        <Swiper
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image className="w-full" src={swiper1} />
          </SwiperItem>
          <SwiperItem>
            <Image className="w-full" src={swiper2} />
          </SwiperItem>
          <SwiperItem>
            <Image className="w-full" src={swiper3} />
          </SwiperItem>
        </Swiper>

        {/* 主体 */}
        <View className="w-full bg-[#f8f8f8] p-[20px] mb-[30px]">
          <View className="w-full h-[300px] rounded-lg pt-[70px] px-[28px] bg-white mb-[40px]">
            {/**价格 */}
            <View className="flex justify-between mb-[40px]">
              <Text className="font-semibold text-[40px]">¥765</Text>
              <Text className="text-[#b5b2c8]">0评价</Text>
            </View>

            {/**标题 */}
            <View className="font-semibold text-[30px]">
              德国CHERRY 樱桃MX3.0$ 白色铝合金 有线无线机械键盘
            </View>
          </View>
          {/* 标签栏 */}
          <View
            onClick={() => setFloatOpen(true)}
            className="w-full h-[100px] rounded-lg px-[30px] flex  items-center bg-white mb-[40px]"
          >
            <Text className="text-[#b5b2c8] mr-[30px]">售后</Text>
            <View className="flex justify-evenly items-center">
              <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
                <AtIcon value="check-circle" size="18" color="#000" />
                <Text className="text-[#000] ml-[10px] text-[25px]">
                  定制商品
                </Text>
              </Text>
              <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
                <AtIcon value="check-circle" size="18" color="#000" />
                <Text className="text-[#000] ml-[10px] text-[25px]">
                  全新正品
                </Text>
              </Text>
              <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
                <AtIcon value="check-circle" size="18" color="#000" />
                <Text className="text-[#000] ml-[10px] text-[25px]">
                  免费装机发出
                </Text>
              </Text>
            </View>
            <AtIcon value="chevron-right" size="20" color="#000" />
          </View>
          {/* 弹出层 */}
          <AtFloatLayout
            isOpened={floatOpen}
            onClose={() => setFloatOpen(false)}
            title="服务说明"
          >
            <View className="p-[30px]">
              <View className="text-black font-bold w-full">1. 定制商品</View>
              <View className="px-[44px] w-full mb-[40px]">
                <Text className="text-black ">
                  您选择商品如为定制走作商品，根据《中华人民共和国消费者权益保护法》第二十五条规定，消费者走作的产品不在"七日内无理由退货”的范围内。从您下单之时起我司便安排供应商进行制作，即立刻产生成本，故本品不支持全款退货。一日下单即视为您接受定制商品总值的30%作为定金及定制服务费，无特殊原因不可退还该部分款项若产品制作过程中已产生大于商品总值30%的成本，则按照扣除已实际产生成本后的金额退款。
                </Text>
              </View>
              <View className="text-black font-bold w-full">2. 全新正品</View>
              <View className="px-[44px] w-full mb-[40px]">
                平台商城向您保证所售商品均为正品行货，平台商品可开具机打发票或电子发票。
              </View>

              <View className="text-black font-bold w-full">
                3.免费装机发出
              </View>
              <View className="px-[44px] w-full">
                您在平台可自行DIY配件，下单后，我们将为您安排装机走线及测试(配件盒子单独发出)，您收到后只需连接电源线和网线，点亮即可使用。
              </View>
            </View>
          </AtFloatLayout>
        </View>
        {/* 商品详情页 */}
        <View className="w-full h-full rounded-lg bg-white">
          <View className="text-black font-bold text-[60px] mb-[30px]">
            商品详情
          </View>
          <Text className="mb-[20px]">
            商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情
            商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情
            商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情
            商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情
            商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情
          </Text>
          <Image
            src="https://pic.imgdb.cn/item/65fed9aa9f345e8d03448ee6.png"
            className="w-full h-[700px]"
          />
        </View>
      </View>
      <View className="fixed bottom-0 h-[200px] z-10 w-full flex justify-center bg-white items-center px-8 py-4 shadow-md text-black font-semibold">
        加入购物车
      </View>
    </>
}</>
  );
}

function SkeletonComponent() {
  return (
    <View className="w-full h-screen">
      {/* 轮播图 */}
      <Swiper
      className="skeleton-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots
      autoplay
    >
      {[...Array(3)].map((_, index) => (
        <SwiperItem key={index}>
          <View className="w-full h-[200px] bg-gray-300 rounded-lg animate-pulse" /> {/* 调整高度以匹配实际图片的高度 */}
        </SwiperItem>
      ))}
    </Swiper>

      {/* 主体 */}
      <View className="w-full h-[300px] rounded-lg pt-[70px] px-[28px] bg-white mb-[40px]">
      {/* 价格部分的骨架屏 */}
      <View className="flex justify-between mb-[40px]">
        <View className="h-[40px] w-[80px] animate-pulse bg-gray-300 rounded-lg" />
        <Text className="text-[#b5b2c8]">0评价</Text>
      </View>

      {/* 标题部分的骨架屏 */}
      <View className="flex-1 space-y-[4px]">
        {[...Array(3)].map((_, i) => (
          <View key={i} className="animate-pulse h-[24px] w-full bg-gray-300 rounded-sm" />
        ))}
      </View>
    </View>
        {/* 标签栏 */}
        <View className="w-full h-[100px] rounded-lg px-[30px] flex  items-center bg-white mb-[40px]">
          <Text className="text-[#b5b2c8] mr-[30px]">售后</Text>
          <View className="flex justify-evenly items-center">
            <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
              <AtIcon value="check-circle" size="18" color="#000" />
              <Text className="text-[#000] ml-[10px] text-[25px]">
                定制商品
              </Text>
            </Text>
            <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
              <AtIcon value="check-circle" size="18" color="#000" />
              <Text className="text-[#000] ml-[10px] text-[25px]">
                全新正品
              </Text>
            </Text>
            <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
              <AtIcon value="check-circle" size="18" color="#000" />
              <Text className="text-[#000] ml-[10px] text-[25px]">
                免费装机发出
              </Text>
            </Text>
          </View>
          <AtIcon value="chevron-right" size="20" color="#000" />
        </View>
      </View>
   
      <View className="w-full h-full rounded-lg bg-white">
        {/* 商品详情标题的骨架屏 */}
        <View className="text-black font-bold text-[60px] mb-[30px] animate-pulse h-[60px] w-full bg-gray-300 rounded-t-lg" />

        {/* 商品详情内容的骨架屏 */}
        <View className="mb-[20px]">
          {[...Array(8)].map((_, i) => (
            <View
              key={i}
              className="animate-pulse h-[24px] mb-[10px] bg-gray-300 rounded-lg"
            />
          ))}
        </View>

        {/* 商品详情图片的骨架屏 */}
        <View className="w-full h-[700px] bg-gray-300 rounded-b-lg animate-pulse" />
      </View>
    </View>
  );
}
