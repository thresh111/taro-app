import VideoCard from "@/components/Card/videoCard";
import { View } from "@tarojs/components";
import { useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";

const tabList = [
  { title: "主机开箱" },
  { title: "硬件安装及拆卸" },
  { title: "系统安装" },
  { title: "故障排查" },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value);
  };
  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick} scroll>
        <AtTabsPane current={current} index={0}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {/* card */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return <VideoCard key={index} />;
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return <VideoCard key={index} />;
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return <VideoCard key={index} />;
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return <VideoCard key={index} />;
            })}
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
