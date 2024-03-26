import { Form, Input, Text, View } from "@tarojs/components";
import React, { useState } from "react";
import { AtForm, AtInput, AtButton } from "taro-ui";
export default function Login() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.detail.value);
  };
  const handleSubmit = (value) => {
    console.log(value);
  };
  const handleReset = () => {};
  return (
    <View className="bg-gradient-to-b h-screen from-[#c5b7b0] via-[#f0bba9] to-[#f6f6f6] px-[30px] pt-[20px]">
      <Form onSubmit={handleSubmit} onReset={handleReset}></Form>
    </View>
  );
}
