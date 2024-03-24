import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useState } from "react";
import { AtTabs, AtGrid, AtSearchBar } from "taro-ui";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const handleClick = (params) => {
    Taro.navigateTo({
      url: `/pages/product_list/index?type=${params.type}`,
    });
  };
  return (
    <View className="h-screen w-full bg-[#f8f8f8] overflow">
      <AtGrid
        onClick={handleClick}
        data={[
          {
            image: "https://pic.imgdb.cn/item/65ffadd19f345e8d03f945ed.png",
            value: "显示器",
            type: "monitor",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffadba9f345e8d03f8a526.png",
            value: "鼠标键盘",
            type: "mouseAndKeyboard",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffad9f9f345e8d03f80ce0.png",
            value: "客制化键盘",
            type: "Customizedkeyboard",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffadea9f345e8d03f9ee9c.png",
            value: "影音外设",
            type: "AudioPlayer",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffadff9f345e8d03fa853e.png",
            value: "桌椅",
            type: "TableChairs",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae179f345e8d03fb26c3.png",
            value: "主机周边",
            type: "HostPlayer",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae259f345e8d03fb818f.png",
            value: "桌搭数码",
            type: "TableSetDigital",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae3c9f345e8d03fc2203.png",
            value: "手办模型",
            type: "kitModel",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae529f345e8d03fcb4e3.png",
            value: "游戏手柄",
            type: "Gamepad",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae909f345e8d03fe6fc1.png",
            value: "氛围灯光",
            type: "GamepadLighting",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffae9e9f345e8d03fed9b5.png",
            value: "插排工具",
            type: "PowerTools",
          },
          {
            image: "https://pic.imgdb.cn/item/65ffaeb39f345e8d03ff77f1.png",
            value: "增值服务",
            type: "services",
          },
          {
            image:
              "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
            value: "社群福利",
            type: "Welfare",
          },
          {
            image:
              "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
            value: "人工售后",
            type: "AfterSale",
          },
        ]}
      />
    </View>
  );
}
