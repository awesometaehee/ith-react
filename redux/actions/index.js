import { ListItem } from 'react-native-elements';

export const addAction = (payload) => ({
  type: 'ADD_ACTION',
  // payload: payload -> 타입과 변수명이 같다면
  payload,
});

export const removeAction = (payload) => ({
  type: 'REMOVE_ACTION',
  payload,
});
