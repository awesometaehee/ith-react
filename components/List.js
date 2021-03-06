import React from 'react';
import { Text, View, Button } from 'react-native';
import { LISTDATA } from '../shared/list';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

// 함수의 return 값이 JSX.Element라면 React 컴포넌트가 된다
// JSX를 쓰려면 import React from 'react'
// Navigator 로 화면 이동할때 컴포넌트 속성으로 navigation이 전달
const List = ({ navigation }) => {
  const list = LISTDATA;
  console.log(list);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Text>List</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details', { id: 1 });
          }}
        /> */}
        {list.map((item, i) => (
          <ListItem
            containerStyle={{ width: '80%' }}
            key={i}
            onPress={() => {
              navigation.navigate('Details', { id: item.id });
            }}
          >
            <Avatar source={{ uri: item.image }} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
export default List;
