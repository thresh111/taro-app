import { Image, Navigator, Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import { AtButton, AtIcon } from "taro-ui";
import banner_png from "@/assets/images/banner.png";
import Taro from "@tarojs/taro";
const img = Taro.getStorageSync("userCover");

function App() {
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
      <View className="w-full h-[150px] flex items-center mb-[50px]">
        <Image
          src={img}
          className="rounded-[50%] w-[150px] h-[150px] bg-rose-100 mr-[40px] "
        />
        {Boolean(Taro.getStorageSync("token")) && (
          <View className="flex flex-col">
            <Text className="text-[#000] text-lg font-bold">微信用户</Text>
          </View>
        )}
      </View>
      <View className="flex justify-between px-[20px]">
        <View className="bg-[#f8f8f8] w-[45%] h-[100px] rounded-lg flex justify-center items-center">
          <AtIcon value="star" className="mr-[20px]" size="20" color="#000" />
          收藏
        </View>
        <View className="bg-[#f8f8f8] w-[45%] h-[100px] rounded-lg flex justify-center items-center">
          <AtIcon
            value="streaming"
            className="mr-[20px]"
            size="20"
            color="#000"
          />
          地址
        </View>
      </View>
      <Image src={banner_png} className="w-full h-[200px] mt-[50px]" />
    </View>
  );
}

export default App;
