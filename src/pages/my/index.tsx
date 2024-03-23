import { Image, Navigator, Text, View } from "@tarojs/components";
import React from "react";
import { AtIcon } from "taro-ui";
import banner_png from "@/assets/images/banner.png";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <View className="bg-gradient-to-b h-screen from-[#c5b7b0] via-[#f0bba9] to-[#f6f6f6] px-[15px] pt-[20px]">
      <View className="w-full h-[150px] flex items-center mb-[40px]">
        <Image
          src="https://pic.imgdb.cn/item/65fe5fc59f345e8d0355aeac.png"
          className="rounded-[50%] w-[150px] h-[150px] bg-rose-100 mr-[40px] "
        />
        <Text className="font-semibold">登录/注册</Text>
      </View>
      {/**收藏 优惠券 */}

      <View className="flex justify-between mb-[17px]">
        <View className="flex justify-between items-center w-[48%] h-[150px] bg-white rounded-lg p-[20px]">
          <View className="flex items-center">
            <AtIcon
              className="mr-[10px]"
              value="credit-card"
              size="25"
              color="#000"
            ></AtIcon>
            <Text>优惠券</Text>
          </View>
          <View>
            <AtIcon value="chevron-right" size="25" color="#000" />
          </View>
        </View>

        <View className="flex justify-between items-center w-[48%] h-[150px] bg-white rounded-lg p-[20px]">
          <View className="flex items-center">
            <AtIcon
              className="mr-[10px]"
              value="star"
              size="25"
              color="#000"
            ></AtIcon>
            <Text>收藏</Text>
          </View>
          <View>
            <AtIcon value="chevron-right" size="25" color="#000" />
          </View>
        </View>
      </View>
      <View className="w-full h-[180px]">
        <Image src={banner_png} className="w-full h-[180px]" />
      </View>
    </View>
  );
}
