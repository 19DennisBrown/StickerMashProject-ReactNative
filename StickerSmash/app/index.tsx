

import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height:'100%', margin:'20'}}>
        <Text className="text-orange-500 text-2xl font-semibold p-8">Lesson on Components</Text>
        <View className="grid text-center items-center">
          <Text className="font-bold">Paws Crypto</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View>
        <TextInput
          className="border-2 border-green-400 rounded-xl m-4 px-4"
          defaultValue="You can type in me"
          
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;