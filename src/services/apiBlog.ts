import axios from 'axios';

const baseUrl = 'https://json-server-ruby.vercel.app';

export const getBlogPostsAPI = async () => {
  try {
    const res = await axios.get(baseUrl + '/posts');
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addBlogPostAPI = async (title, content) => {
  try {
    const res = await axios.post(baseUrl + '/posts', {
      id: 5,
      title,
      content,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
