import React from "react";
import { View, Navigator } from "@tarojs/components";
import { AtIcon, AtNoticebar } from "taro-ui";

export interface IAppProps {}

export default function App() {
  return (
    <>
      <View className="h-[20px]">
        <AtNoticebar marquee icon="volume-plus">
          打破常规，秀出个性自我。电脑DIY，让您轻松实现从零配件选择到整机组装的一站式服务
        </AtNoticebar>
      </View>

      <View className="h-[calc(100vh-20px)] px-[66px] pt-[80px]">
        <View className="flex items-center justify-between bg-[#f8f8f8] w-full h-[200px] rounded-xl pt-[70px] pl-[42px] pr-[60px] pb-[70px] mb-[42px]">
          <View>
            <View className="text-[45px] mb-[20px] text-black text font-semibold">
              定制键盘
            </View>
            <View className="text-[30px] text-[#8f8e96]">
              尽享独特 满足所有遐想~
            </View>
          </View>
          <View>
            <Navigator url="/pages/diy_key_board/index" openType={"navigate"}>
              <AtIcon value="chevron-right" size="48" color="#000"></AtIcon>
            </Navigator>
          </View>
        </View>

        <View className="flex items-center justify-between bg-[#f8f8f8] w-full h-[200px] rounded-xl pt-[70px] pl-[42px] pr-[60px] pb-[70px] mb-[42px]">
          <View>
            <View className="text-[45px] mb-[20px] text-black text font-semibold ">
              DIY定制整机服务
            </View>
            <View className="text-[30px] text-[#8f8e96]">
              行业最全的整机方案
            </View>
          </View>
          <View>
            <Navigator
              url="/pages/customized_machine/index"
              openType={"navigate"}
            >
              <AtIcon value="chevron-right" size="48" color="#000"></AtIcon>
            </Navigator>
          </View>
        </View>

        <View className="flex items-center justify-between bg-[#f8f8f8] w-full h-[200px] rounded-xl pt-[70px] pl-[42px] pr-[60px] pb-[70px] mb-[42px]">
          <View>
            <View className="text-[45px] mb-[20px] text-black text font-semibold">
              天梯图
            </View>
            <View className="text-[30px] text-[#8f8e96]">
              最新电脑性能排行榜
            </View>
          </View>
          <View>
            <Navigator url="/pages/ranking_list/index" openType={"navigate"}>
              <AtIcon value="chevron-right" size="48" color="#000"></AtIcon>
            </Navigator>
          </View>
        </View>

        <View className="flex items-center justify-between bg-[#f8f8f8] w-full h-[200px] rounded-xl pt-[70px] pl-[42px] pr-[60px] pb-[70px]">
          <View>
            <View className="text-[45px] mb-[20px] text-black text font-semibold">
              视频教程
            </View>
            <View className="text-[30px] text-[#8f8e96]">
              主机到手了如何操作? 教程看这里
            </View>
          </View>
          <View>
            <Navigator url="/pages/video_course/index" openType={"navigate"}>
              <AtIcon value="chevron-right" size="48" color="#000"></AtIcon>
            </Navigator>
          </View>
        </View>
      </View>
    </>
  );
}
