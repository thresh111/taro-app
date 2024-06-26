import { Image, Text, View, Swiper, SwiperItem } from "@tarojs/components";
import { AtFloatLayout, AtIcon } from "taro-ui";
import { useEffect, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";

export default function App() {
  const [floatOpen, setFloatOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [commodityData, setCommodityData] = useState<any>();

  const route = useRouter();

  const id = route.params.id;

  useEffect(() => {
    getCommodityData();
  }, []);

  const getCommodityData = async () => {
    const res = await Taro.request({
      url: `http://localhost:3000/commodity/${id}`,
      success() {
        setIsLoading(false);
      },
    });
    setCommodityData(res.data);
  };

  const [once, setOnce] = useState(0);
  const handClick = async () => {
    const LOGINTOKEN = Taro.getStorageSync("token");
    if (!Boolean(LOGINTOKEN)) {
      Taro.showToast({
        title: "未登录",
        icon: "none",
        duration: 2000,
        mask: true,
      });
      setTimeout(() => {
        Taro.navigateTo({
          url: "/pages/login/index",
        });
      }, 2000);
    }
    if (once === 0) {
      if (!Boolean(LOGINTOKEN)) return;
      setOnce((p) => p + 1);
      const data = await Taro.request({
        url: "http://localhost:3000/user/shopcart",
        method: "POST",
        data: {
          commodity: commodityData,
          _id: Taro.getStorageSync("userId"),
        },
      });
      if (data.data.message === "添加成功") {
        Taro.showToast({
          title: "添加成功",
          mask: true,
          icon: "success",
          duration: 1000,
        });
      }
    } else {
      Taro.showToast({
        title: "已添加过",
      });

      return;
    }
  };

  return (
    <>
      {isLoading ? null : (
        <>
          <View className="w-full h-screen">
            {/* 轮播图 */}
            <Swiper
              indicatorColor="#999"
              indicatorActiveColor="#333"
              circular
              indicatorDots
              autoplay
            >
              {commodityData.swiperItems.map((item, index) => (
                <SwiperItem key={index}>
                  <Image className="w-full" src={item} />
                </SwiperItem>
              ))}
            </Swiper>

            {/* 主体 */}
            <View className="w-full bg-[#f8f8f8] p-[20px] mb-[30px]">
              <View className="w-full h-[300px] rounded-lg pt-[40px]  px-[28px] bg-white mb-[40px]">
                {/**价格 */}
                <View className="flex  justify-between  mb-[40px]">
                  <Text className="font-semibold text-[40px]">
                    ¥{commodityData.price}
                  </Text>
                  <Text className="text-[#b5b2c8]">
                    {commodityData.reviewsNums}评价
                  </Text>
                </View>

                {/**标题 */}
                <View className="font-semibold text-[30px]">
                  {commodityData.title}
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
                    <AtIcon value="check-circle" size="15" color="#000" />
                    <Text className="text-[#000] ml-[10px] text-[22px]">
                      定制商品
                    </Text>
                  </Text>
                  <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
                    <AtIcon value="check-circle" size="15" color="#000" />
                    <Text className="text-[#000] ml-[10px] text-[22px]">
                      全新正品
                    </Text>
                  </Text>
                  <Text className="text-[#b5b2c8] mr-[20px] flex items-center">
                    <AtIcon value="check-circle" size="15" color="#000" />
                    <Text className="text-[#000] ml-[10px] text-[22px]">
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
                  <View className="text-black font-bold w-full">
                    1. 定制商品
                  </View>
                  <View className="px-[44px] w-full mb-[40px]">
                    <Text className="text-black ">
                      您选择商品如为定制走作商品，根据《中华人民共和国消费者权益保护法》第二十五条规定，消费者走作的产品不在"七日内无理由退货”的范围内。从您下单之时起我司便安排供应商进行制作，即立刻产生成本，故本品不支持全款退货。一日下单即视为您接受定制商品总值的30%作为定金及定制服务费，无特殊原因不可退还该部分款项若产品制作过程中已产生大于商品总值30%的成本，则按照扣除已实际产生成本后的金额退款。
                    </Text>
                  </View>
                  <View className="text-black font-bold w-full">
                    2. 全新正品
                  </View>
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
              <Text className="mb-[20px]">{commodityData.detail}</Text>
              <Image
                src="https://pic.imgdb.cn/item/65fed9aa9f345e8d03448ee6.png"
                className="w-full h-[700px]"
              />
            </View>
          </View>
          <View
            onClick={handClick}
            className="fixed bottom-0 h-[200px] z-10 w-full flex justify-center bg-white items-center px-8 py-4 shadow-md text-black font-semibold"
          >
            加入购物车
          </View>
        </>
      )}
    </>
  );
}
