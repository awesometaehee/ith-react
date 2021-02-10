import React from 'react';
import { Text, View, Button } from 'react-native';

// 함수의 return 값이 JSX.Element라면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'
const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>HOME</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', { id: 1 });
        }}
      />
    </View>
  );
};
export default Home;
