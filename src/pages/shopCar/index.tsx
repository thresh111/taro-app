import { Button, Image, Text, View } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtButton, AtTag } from "taro-ui";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const LOGINTOKEN = Taro.getStorageSync("token");
  const [shopList, setShopList] = useState<any[]>([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!Boolean(LOGINTOKEN)) {
      Taro.showToast({
        title: "未登录",
        icon: "none",
        duration: 2000,
        mask: true,
      });
    }
    setTimeout(() => {
      Taro.navigateTo({
        url: "/pages/login/index",
      });
    }, 2000);
  }, []);

  useDidShow(() => {
  useDidShow(() => {
    fetchShopList();
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [shopList]);

  const calculateTotalPrice = () => {
    let total = 0;
    if (shopList && shopList.length > 0) {
      for (let i = 0; i < shopList.length; i++) {
        total += shopList[i]!.price;
      }
    }
    setSum(total);
  };

  const fetchShopList = async () => {
    if (!Boolean(LOGINTOKEN)) return;
    const res = await Taro.request({
      url: "http://localhost:3000/user/shoplist",
      method: "GET",
      data: {
        _id,
      },
    }).then((res) => {
      setShopList(res.data.data);
    });
  };

  const handleTologin = () => {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  };

  const handleToNavgitor = () => {
    Taro.switchTab({
      url: "/pages/category/index",
    });
  };

  const handleDel = async (commodityId) => {
    const res = await Taro.request({
      url: "http://localhost:3000/user/delShoplist",
      method: "POST",
      data: {
        _id,
        commodityId: commodityId,
      },
    });
    console.log(res, "res");

    if (res.data.code === 200) {
      Taro.showToast({
        title: "删除成功",
        icon: "none",
        duration: 2000,
        mask: true,
      });
      // fetchShopList();
    } else {
      Taro.showToast({
        title: "删除失败",
        icon: "none",
        duration: 2000,
        mask: true,
      });
    }
  };

  const handleClick = (_id) => {
    Taro.navigateTo({
      url: `/pages/product_detail/index?id=${_id}`,
    });
  };

  const handlePay = () => {
    Taro.showToast({
      title: "模拟支付成功",
      icon: "success",
      mask: true,
      duration: 2000,
    });
  };

  return (
    <>
      {Boolean(Taro.getStorageSync("token")) ? (
        <View className="h-screen w-full bg-[#f8f8f8]">
          {shopList.length > 0 ? (
            shopList.map((item: any) => {
              return (
                <View className="h-[200px] flex bg-white w-full px-[40px]  rounded-lg mb-[30px]">
                  <Image
                    onClick={() => handleClick(item._id)}
                    src={item.cover}
                    className="h-[200px] w-[200px]"
                  />
                  <View className=" flex-1 pt-[20px] pl-[20px] flex flex-col justify-between">
                    <View className="text-base line-clamp-1">{item.title}</View>
                    <View className="flex justify-between items-center ">
                      <View className="mb-[30px]">价格: ¥ {item.price}</View>
                      <AtTag onClick={() => handleDel(item._id)}>
                        删除商品
                      </AtTag>
                    </View>
                  </View>
                </View>
              );
            })}

          {Boolean(Taro.getStorageSync("token")) && (
            <View className="fixed bottom-0 left-0 right-0 py-4 px-10 bg-white rounded-t-lg shadow-md">
              <Text className="text-xl font-bold">总价：¥{sum.toFixed(2)}</Text>
            </View>
          )}
          <AtButton
            type="primary"
            full
            onClick={handlePay}
            className="w-[30%] h-[100px]absolute bottom-0 right-0 text-center leading-[100px]"
          >
            结算
          </AtButton>
        </View>
      ) : (
        <View className="flex flex-col">
          <AtButton
            full
            onClick={handleTologin}
            className="text-[#000] text-lg font-bold"
          >
            点击登录
          </AtButton>
        </View>
      )}
    </>
  );
}
