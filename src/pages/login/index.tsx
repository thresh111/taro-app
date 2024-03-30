import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtInput, AtButton, AtTabs, AtTabsPane } from "taro-ui";
export default function Login() {
  const [current, setCurrent] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChange = (value) => {
    setUsername(value);
    return value;
  };
  const passwordChange = (value) => {
    setPassword(value);
    return value;
  };
  const confirmPasswordChange = (value) => {
    setConfirmPassword(value);
    return value;
  };

  const handleClick = async (type) => {
    if (type === "login") {
      if (username === "" || password === "") {
        return;
      }
      const res = await Taro.request({
        url: "http://localhost:3000/user/login",
        method: "POST",
        data: {
          username,
          password,
        },
      });
      if (res.data.message == "用户不存在") {
        Taro.showToast({
          title: "用户不存在",
          icon: "error",
          duration: 2000,
          mask: true,
        });
        return;
      } else if (res.data.message === "密码错误") {
        Taro.showToast({
          title: "密码错误",
          icon: "error",
          duration: 2000,
          mask: true,
        });
        return;
      } else {
        Taro.showToast({
          title: "登录成功",
          icon: "success",
          duration: 2000,
          mask: true,
        });
        Taro.setStorageSync(
          "token",
          res.data.data._id + res.data.data.username
        );
        Taro.setStorageSync("userId", res.data.data._id);

        setTimeout(() => {
          // Taro.switchTab({
          //   url: "/pages/my/index",
          // });
          Taro.reLaunch({
            url: "/pages/my/index",
          });
        }, 2000);
      }
    } else if (type === "register") {
      if (username === "" || password === "" || confirmPassword === "") {
        return;
      }

      if (password !== confirmPassword) {
        Taro.showToast({
          title: "密码不一致",
          icon: "error",
          duration: 2000,
          mask: true,
        });
        return;
      }
      const res = await Taro.request({
        url: "http://localhost:3000/user/register",
        method: "POST",
        data: {
          username,
          password,
        },
      });

      if (res.data.message == "用户已存在") {
        Taro.showToast({
          title: "用户已存在",
          icon: "error",
          duration: 2000,
          mask: true,
        });
        return;
      } else {
        Taro.showToast({
          title: "注册成功",
          icon: "success",
          duration: 2000,
          mask: true,
        });

        Taro.setStorageSync(
          "token",
          res.data.data._id + res.data.data.username
        );
        Taro.setStorageSync("userId", res.data.data._id);
      }

      setTimeout(() => {
        // Taro.switchTab({
        //   url: "/pages/my/index",
        // });
        Taro.reLaunch({
          url: "/pages/my/index",
        });
      }, 2000);
    }
  };

  const tabsChange = (value) => {
    setCurrent(value);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const tabList = [{ title: "登录" }, { title: "注册" }];
  return (
    <AtTabs current={current} tabList={tabList} onClick={tabsChange}>
      <AtTabsPane current={current} index={0}>
        <View className="h-screen  px-[30px] pt-[20px]">
          <View className="text-lg">登录</View>
          <View className="text-lg mb-[50px]">
            加入 DIY 数码 充分发挥您的定制能力
          </View>
          <AtInput
            name="username"
            title="用户名"
            type="text"
            placeholder="请输入用户名"
            value={username}
            onChange={usernameChange}
          />
          <AtInput
            name="password"
            title="密码"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={passwordChange}
          />
          <AtButton
            className="border-none"
            onClick={() => handleClick("login")}
          >
            登录
          </AtButton>
        </View>
      </AtTabsPane>
      <AtTabsPane current={current} index={1}>
        <View className="h-screen  px-[30px] pt-[20px]">
          <View className="text-lg">注册</View>
          <View className="text-lg mb-[50px]">
            加入 DIY 数码 充分发挥您的定制能力
          </View>
          <AtInput
            name="username"
            title="用户名"
            type="text"
            placeholder="请输入用户名"
            value={username}
            onChange={usernameChange}
          />
          <AtInput
            name="password"
            title="密码"
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={passwordChange}
          />
          <AtInput
            name="confirmPassword"
            title="确定密码"
            type="password"
            placeholder="请再次输入密码"
            value={confirmPassword}
            onChange={confirmPasswordChange}
          />
          <AtButton
            className="border-none"
            onClick={() => handleClick("register")}
          >
            注册
          </AtButton>
        </View>
      </AtTabsPane>
    </AtTabs>
  );
}
