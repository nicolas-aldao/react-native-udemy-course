import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

export const AppContext = React.createContext({});

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

// export const AppProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);
const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

// return (
//   <AppContext.Provider value={{ data: blogPosts, addBlogPost }}>
//     {children}
//   </AppContext.Provider>
// );
// };

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  [],
);
