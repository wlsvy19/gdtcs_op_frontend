import axios from 'axios';

export const request = async (method, url, param = {}) => {
  const inputMethod = method.toUpperCase() === 'GET';
  const config = {
    method,
    url,
    ...(inputMethod ? { param } : { data: param }),
  };
  try {
    const { data } = await axios(config);
    return data;
  } catch (error) {
    console.error(`HTTP request error: ${method}-${url}`, error);
    throw error;
  }
};
