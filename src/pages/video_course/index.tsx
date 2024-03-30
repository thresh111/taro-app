import VideoCard from "@/components/Card/videoCard";
import { View } from "@tarojs/components";
import { useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";

const list1 = [
  {
    title: "主机到手如何开箱",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV19j421S76Y/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/5b74490c10ea33592842d4871a043daaab7b611c.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "如何取出机箱填充物",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1xg4y1P7JJ/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/6f13648aae126519324ad25f743aa93f05863cd7.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "新主机到手如何接线",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1uM4y1k7nZ/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i1.hdslb.com/bfs/archive/f403620c115180e0912d9e5ef66dc70e78826516.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "Y60机箱到手如何拆箱",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1KY411Z7ew/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i1.hdslb.com/bfs/archive/036007c457efc2ea5662ec9960f2423dde89f558.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
];

const list2 = [
  {
    title: "新主机如何安装冷风扇",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1S3411H7Gk/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i1.hdslb.com/bfs/archive/a2afdf17a0d74c586371d78ed94b9be3be342a8f.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "新主机如何安装显卡",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1T24y1n7pY/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/9b9cfde03dbf7869b01e600d90d4af70b05d25aa.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "如何安装M.2硬盘",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1bP411K79i/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/23c438913dce9cab3b1eeaa9439c67355f7c12d4.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
];
const list3 = [
  {
    title: "如何安装WIN系统",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1DJ411D79y/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i1.hdslb.com/bfs/archive/6be1c67c6777b80180928879e73ea70ce89dbfd3.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
  {
    title: "如何安装PE系统",
    data: "2022.12.10",
    author: "小名实验室",
    url: "https://www.bilibili.com/video/BV1vT4y1n7JX/?spm_id_from=333.337.search-card.all.click&vd_source=5554a153abd1cfe9782e483dff26f613",
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/9bf22d528b40e4c42f583a3d9147f2bf97f46896.jpg@672w_378h_1c_!web-search-common-cover.avif",
  },
];

export default function App() {
  const tabList = [
    { title: "主机" },
    { title: "硬件安装及拆卸" },
    { title: "系统安装" },
  ];
  const [current, setCurrent] = useState(0);

  const handleClick = (value) => {
    setCurrent(value);
  };
  return (
    <View>
      <AtTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0}>
          {/* card */}
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {list1.map((item, index) => {
              return <VideoCard key={index} {...item} />;
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {list2.map((item, index) => {
              return <VideoCard key={index} {...item} />;
            })}
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className="h-[calc(100vh-86px)] bg-[#f8f8f8] w-full px-[50px] pt-[10px] overflow-auto">
            {list3.map((item, index) => {
              return <VideoCard key={index} {...item} />;
            })}
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
