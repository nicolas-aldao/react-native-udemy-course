import React from 'react';
import createDataContext from './createDataContext';
import { getBlogPostsAPI, addBlogPostAPI } from '../services/apiBlog';

export const AppContext = React.createContext({});

const fetchData = async () => {
  try {
    return await getBlogPostsAPI();
  } catch (err) {
    console.log(err);
    return [];
  }
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      console.log('entra case');
      return [...state, action.payload];
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const res = await fetchData();
    if (res == undefined || res.status !== 200) {
      console.log('Algo salió mal!');
    }
    dispatch({ type: 'get_blogposts', payload: res.data[0] });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    dispatch({
      type: 'add_blogpost',
      payload: { title: title, content: content },
    });
    const res = await addBlogPostAPI(title, content);
    console.log('🚀 ~ file: AppContext.js:56 ~ return ~ res', res);
    if (res == undefined || res.status !== 200) {
      console.log('Algo salió mal!');
    }
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  [],
);
