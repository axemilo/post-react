import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  pages: null,
}

export const { actions: postsAction, reducer: postsReducers } = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload
    },
    setPageLength(state, action) {
      state.pages = action.payload
    },
    searchPosts(state, action) {
      const regex = new RegExp(action.payload, 'gi')
      if (action.payload !== '') {
        state.posts = state.posts.filter((post) => post.title.match(regex))
      }
    },
  },
})

const initialAuth = {
  auth: {},
}

export const { actions: authAction, reducer: authReducers } = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload
    },
  },
})

export const { actions: pageAction, reducer: pageReducers } = createSlice({
  name: 'page',
  initialState: {
    page: 5,
  },
  reducers: {
    currentPage(state, action) {
      state.page = action.payload
    },
  },
})
