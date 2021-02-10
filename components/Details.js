import React from 'react';
import { Text, View } from 'react-native';

// 함수의 return 값이 JSX.Element라면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'
// Navigator 로 화면 이동할때 컴포넌트 속성으로 route, navigation이 전달
const Details = ({ route, navigation }) => {
  console.log('-- detail --');
  console.log(route.params); // navigate로 넘어온 매개변수

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Details</Text>
    </View>
  );
};
export default Details;
