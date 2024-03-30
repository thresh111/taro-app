import { Image, Text, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

function App() {
  const initialToken = Taro.getStorageSync("token");

  useEffect(() => {
    if (!initialToken) {
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

  const handleLogout = () => {
    Taro.clearStorageSync();
    Taro.showToast({
      title: "退出成功",
      icon: "success",
      duration: 2000,
      mask: true,
    });
    setTimeout(() => {
      Taro.reLaunch({
        url: "/pages/my/index",
      });
    }, 2000);
  };

  const handleLogin = () => {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  };

  return (
    <View className="bg-gradient-to-b h-screen from-[#c5b7b0] via-[#f0bba9] to-[#f6f6f6] px-[15px] pt-[20px]">
      <View className="w-full h-[150px] flex items-center mb-[40px]">
        <Image
          src="https://pic.imgdb.cn/item/65fe5fc59f345e8d0355aeac.png"
          className="rounded-[50%] w-[150px] h-[150px] bg-rose-100 mr-[40px] "
        />

        <View className="flex flex-col">
          <Text className="text-[#000] text-lg font-bold">微信用户</Text>
        </View>
      </View>

      {Boolean(Taro.getStorageSync("token")) && (
        <AtButton full type="primary" onClick={handleLogout}>
          退出登录
        </AtButton>
      )}
      {!Boolean(Taro.getStorageSync("token")) && (
        <AtButton full type="primary" onClick={handleLogin}>
          登录
        </AtButton>
      )}
    </View>
  );
}

export default App;
