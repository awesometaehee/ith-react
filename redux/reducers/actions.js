// 액션 목록을 제어하는 reducer
// actions.js

const actions = (state = [], action) => {
  // action의 type별로 state제어
  switch (action.type) {
    case 'ADD_ACTION':
      // return 변경할 state 제어
      // 현재 state를 복사하여 변경
      return [
        // state 배열의 요소들을 copy
        // state == [{}, {}] ...state -> {}, {}
        ...state,
        // payload 객체 copy
        {
          ...action.payload,
        },
      ];
    case 'REMOVE_ACTION':
      return [...state.filter((item) => item.id != action.payload)];
    default:
      return state;
  }
};

export default actions;
