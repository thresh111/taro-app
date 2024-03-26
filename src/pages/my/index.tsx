import { Image, Navigator, Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import { AtButton, AtIcon } from "taro-ui";
import banner_png from "@/assets/images/banner.png";
import Taro from "@tarojs/taro";

function App() {
  const [userId, setUserId] = useState("微信用户");
  useEffect(() => {
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
  }, []);

  return (
    <View className="bg-gradient-to-b h-screen from-[#c5b7b0] via-[#f0bba9] to-[#f6f6f6] px-[15px] pt-[20px]">
      <View className="w-full h-[150px] flex items-center mb-[40px]">
        <Image
          src="https://pic.imgdb.cn/item/65fe5fc59f345e8d0355aeac.png"
          className="rounded-[50%] w-[150px] h-[150px] bg-rose-100 mr-[40px] "
        />
        <Text className="font-semibold">登录/注册</Text>
        {Boolean(Taro.getStorageSync("token"))}
      </View>
    </View>
  );
}

export default App;
