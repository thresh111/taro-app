import { Image, Navigator, Text, View } from "@tarojs/components";
import { Swiper, SwiperItem } from "@tarojs/components";
import { useState } from "react";
import { AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import KeyBoardCard from "@/components/Card/keyboardCard";
import ArticleCard from "@/components/Card/article_card";

const tabList = [{ title: "精选" }, { title: "键盘库" }];

export default function App() {
  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value);
  };
  return (
    <View className="bg-[#f2f2f2] h-screen w-full  overflow-auto p-[40px]">
      <Swiper
        className="h-[350px] mb-[70px] "
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <Image
            className="w-full"
            src="https://up.img.heidiancdn.com/o_1h6e5tk2i17qggf715npr3f149q0sku1.jpg"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className="w-full"
            src="https://up.img.heidiancdn.com/o_1hhm2m5f11cs1rob1fabohvhp50C01016.jpg"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className="w-full"
            src="https://up.img.heidiancdn.com/o_1hp8br82ke1ec1j53s1a8f1ltt05_PC_D.jpg"
          />
        </SwiperItem>
      </Swiper>

      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0}>
          <View className="h-[calc(100vh-150px)]  overflow-auto pt-[70px] flex justify-between flex-wrap">
            {/**card */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return <ArticleCard />;
            })}
            {/*  */}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className="h-[calc(100vh-150px)] overflow-auto pt-[70px] flex justify-between flex-wrap w-[100%]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return <KeyBoardCard />;
            })}
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
