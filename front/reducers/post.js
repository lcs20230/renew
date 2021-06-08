export const initialState = {
  mainPosts : [{
    id     : 1,
    User   : {
      id      : 1,
      nickname: '찬석',
    },
    content: '첫번째 글',
    Image  : [{
      src: 'https//book'
    }, {
      src: 'https//book'
    }, {
      src: 'https//book'
    }],
    Comment: [{
      User   : {
        nickname: 'nero'
      },
      content: '굿굿'
    }, {
      User   : {
        nickname: 'hero',
      },
      content: '흠흠'
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
    nickname: '찬석'
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
