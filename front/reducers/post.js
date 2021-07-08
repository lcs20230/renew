export const initialState = {
  mainPosts : [{
    id     : 1,
    User   : {
      id      : 1,
      nickname: '찬석',
    },
    content: '첫번째 글',
    Images  : [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User   : {
        nickname: 'nero',
      },
      content: '굿굿',
    }, {
      User   : {
        nickname: 'hero',
      },
      content: '흠흠',
    }]
  }],
  imagePaths: [],
  postAdded : false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id      : 2,
  content : '더미데이터',
  User    : {
    id      : 1,
    nickname: '찬석',
  },
  Images  : [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
