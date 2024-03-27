import { Button, Image, Text, View } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtButton } from "taro-ui";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const LOGINTOKEN = Taro.getStorageSync("token");
  const [shopList, setShopList] = useState([]);

  const _id = Taro.getStorageSync("userId");

  useDidShow(() => {
    fetchShopList();
    console.log(222);
  });

  const fetchShopList = () => {
    Taro.request({
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

  return (
    <>
      {Boolean(Taro.getStorageSync("token")) ? (
        <View className="h-screen w-full bg-[#f8f8f8]">
          {shopList.length > 0 ? (
            shopList.map((item: any) => {
              return (
                <View className="h-[200px] flex bg-white w-full px-[40px]  rounded-lg mb-[30px]">
                  <Image src={item.cover} className="h-[200px] w-[200px]" />
                  <View className=" flex-1 pt-[20px] pl-[20px] flex flex-col justify-between">
                    <View className="text-base line-clamp-1">{item.title}</View>
                    <View className="flex justify-between items-center ">
                      <View className="mb-[30px]">价格: ¥ {item.price}</View>
                      <AtButton size="small" className="" onClick={() => {}}>
                        购买
                      </AtButton>
                      <AtButton
                        size="small"
                        onClick={() => handleDel(item._id)}
                      >
                        删除
                      </AtButton>
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <View className=" text-lg">
              <Button
                className="flex justify-center items-center"
                onClick={handleToNavgitor}
              >
                购物车是空的,去购物
              </Button>
            </View>
          )}
        </View>
      ) : (
        <View className="flex flex-col">
          <Text
            onClick={handleTologin}
            className="text-[#000] text-lg font-bold"
          >
            请登录
          </Text>
        </View>
      )}
    </>
  );
}
