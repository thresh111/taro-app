import { Image, Navigator, Text, View } from "@tarojs/components";
import React from "react";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Navigator
      className="w-[48%]  bg-white h-[520px] mb-[20px]"
      openType={"navigate"}
      url="/pages/product_details/index"
    >
      <Image
        className="h-[300px] w-[100%]"
        src="https://up.img.heidiancdn.com/o_1h6e5tk2i17qggf715npr3f149q0sku1.jpg"
      />
      <View className="h-[200px] w-full py-[40px] px-[20px] flex-col mb-[40px] justify-between">
        <View className="text-sm text-ellipsis overflow-hidden  mb-[40px]">
          黑吉蛇AL75 铝坨坨 单模三模套件...
        </View>
        <View className="flex justify-between items-center">
          <Text className="font-bold">¥135</Text>
          <Text className="text-[#88878f]">6人购买</Text>
        </View>
      </View>
    </Navigator>
  );
}
