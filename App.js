import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import HelloWorld from './components/HelloWorld';
// import Counter from './components/Counter';
// import LotsOfGreetings from './components/LotsOfGreetings';
import SimpleList from './components/SimpleList';

// App 컴포넌트 시작
export default function App() {
  // JSX 문법 -> UI 템플릿을 작성
  return (
    <View style={styles.container}>
      {/* <HelloWorld></HelloWorld> */}
      {/* <Counter></Counter> */}
      {/* <LotsOfGreetings></LotsOfGreetings> */}
      <SimpleList></SimpleList>
      <StatusBar style="auto" />
    </View>
  );
}
// App 컴포넌트 끝

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
