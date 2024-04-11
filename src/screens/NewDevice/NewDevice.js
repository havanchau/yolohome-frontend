import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Ionicons, Feather } from "react-native-vector-icons";

const NewDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceName: "",
    price: 0,
    description: "",
    image: "",
  });

  return (
    <View className="w-full">
      <View className="flex items-center justify-center mt-8 bg-blue-700 h-16 rounded-t-3xl">
        <Text className="px-2 text-2xl font-medium mb-1 text-white">
          Thêm sản phẩm mới
        </Text>
      </View>

      <View className="">
        <View className="flex-row items-center mt-4 bg-blue-700 h-12">
          <Ionicons
            name="information-circle-outline"
            size={32}
            className="ml-2 mr-4 text-white"
          />
          <Text className="text-lg font-semibold text-white">Tên sản phẩm</Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                deviceName: text,
              }))
            }
            className="text-normal font-semibold w-full pt-2 pl-4 border-1 border-b border-gray-200"
            placeholder="Nhập tên sản phẩm"
            value={deviceInfo.deviceName}
          />
          <View className="items-end pt-1 pr-2">
            <Text className="text-gray-500">
              {deviceInfo.deviceName.length} {"/2000"}
            </Text>
          </View>
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-4 bg-blue-700 h-12">
          <Ionicons
            name="information-circle-outline"
            size={32}
            className="ml-2 mr-4 text-white"
          />
          <Text className="text-lg font-semibold text-white">Giá sản phẩm</Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                price: parseInt(text),
              }))
            }
            className="text-normal font-semibold w-full pt-2 pl-4 border-1 border-b border-gray-200"
            placeholder="Nhập giá sản phẩm"
            value={deviceInfo.price}
          />
          <View className="items-end pt-1 pr-2">
            <Text className="text-gray-500">VND</Text>
          </View>
        </View>
      </View>

      <View className="">
        <View className="flex-row items-center mt-4 bg-blue-700 h-12">
          <Ionicons
            name="information-circle-outline"
            size={32}
            className="ml-2 mr-4 text-white"
          />
          <Text className="text-lg font-semibold text-white">
            Mô tả sản phẩm
          </Text>
        </View>
        <View className="">
          <TextInput
            onChangeText={(text) =>
              setDeviceInfo((prevState) => ({
                ...prevState,
                description: text,
              }))
            }
            className="text-normal font-semibold w-full pt-2 pl-4 border-1 border-b border-gray-200"
            placeholder="Nhập mô tả sản phẩm"
            value={deviceInfo.description}
          />
          <View className="items-end pt-1 pr-2">
            <Text className="text-gray-500">
              {deviceInfo.description.length} {"/4000"}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-center mb-4">
        <Feather name="image" size={32} className="mr-2" />
        <Text className="text-lg font-semibold">Thêm hình ảnh</Text>
      </View>

      <TouchableOpacity
        onPress=""
        className="w-full h-12 items-center flex bg-blue-700 justify-center rounded-xl mt-8"
      >
        <Text className="text-lg font-semibold text-white">Xác nhận</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={(e) => setDeviceInfo({
          deviceName: "",
          price: 0,
          description: "",
          image: "",
        })}
        className="w-full h-12 items-center flex bg-gray-400 justify-center rounded-xl mt-4"
      >
        <Text className="text-lg font-semibold text-black">Hủy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewDevice;