import React, { useState } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';

import logo from "../../../assets/logo.png"
import homeJson from "../../../assets/home_1.json";

export default Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePress = () => {
    console.log("Button pressed");
    navigation.navigate('HomeScreen');
  };
  return (
    <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <Text className='font-bold text-2xl'>Welcome back!</Text>
        <Image 
          source={logo}
          className="w-[280] h-[140]"
        />    
        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 350, height: 260}}
        />           
        <View className='mb-2'>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
          placeholder="Nhập địa chỉ Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <View>
          <TextInput className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[310] pl-5 pr-40 py-3 text-left'
          placeholder="Nhập mật khẩu"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          required>

          </TextInput>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text className='text-right w-[280] text-bluebg p-2'>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View className='w-[280] h-[80]'>
        <TouchableOpacity className='py-3 px-8 mt-6 bg-bluebg rounded-md flex-1 items-center' onPress={handlePress}><Text className='text-xl text-white'>Đăng nhập</Text></TouchableOpacity>
        </View>
       
        <View className="pt-2 flex-row justify-center">
          <Text> Bạn chưa có tài khoản ? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}> 
            <Text className=' text-bluebg' >Đăng ký</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </TailwindProvider>
  );
};