import React from "react";
import { Image, Text, View } from "react-native";
import webBanner from '../../assets/web-banner.jpg'
export default function HomeScreen(){
    return(
    <>
    <View className="flex items-center h-5/6 mt-10 ">
        <View className=" w-full relative">
        <Image source={webBanner} className="h-auto w-full"></Image>
        <View className="flex-row w-9/12 h-10 mt-10 absolute">
        <Text className=" flex text-right top-20 p-2 text-white">Bienvenido Guest03949</Text>
        
        </View>
        <Text className=" m-auto justify-center p-2 text-center">$=xxx</Text>
        </View>
<View className="flex w-full items-end mt-16">
        <Text className="border-2 flex w-16 h-16 m-1">ADS</Text>
        <Text className="border-2 flex w-16 h-16 m-1">PROMO</Text>
        <Text className="border-2 flex w-16 h-16 m-1">PROMO2</Text>
</View>
</View>
<View className="flex w-[100%] m-auto mb-0.5">
<Image source={webBanner} className=" w-[100%]"></Image>
      </View>  
    
    </>
)}