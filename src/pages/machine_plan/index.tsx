import { Image, Text, View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import PlanCard from "@/components/Card/plan_card/index";

import eva from "@/assets/images/eva.png";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const handleClick = () => {
    Taro.pageScrollTo({
      scrollTop: 810,
      duration: 300,
    });
  };
  return (
    <View>
      <View className="h-[100vh] w-full overflow-auto bg-gradient-to-b from-[#dbf6ff] to-[#b9e1eb]">
        {/* 头部图片 */}
        <Image src={eva} className="w-full h-[700px] mb-[40px]" />
        <Text className="flex justify-center items-center w-full px-[40px] h-[200px]">
          主机配备专属提手，机甲元素的边框设计。机箱最多可兼容13把风扇，散热拉满，清凉一夏。顶级UV打印工艺可来图定制您的机箱外观。
        </Text>
        <View className="h-[calc(100vh-940px)] flex justify-center items-center">
          <AtButton type="primary" onClick={handleClick}>
            选择配置
          </AtButton>
        </View>
      </View>
      <View className="h-full bg-pink-400 w-full pt-[60px] px-[40px]">
        {/* 方案card */}
        {[1, 2, 3, 4, 5].map((item) => {
          return <PlanCard />;
        })}
      </View>
    </View>
  );
}
