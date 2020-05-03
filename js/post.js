
const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
};

const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
};

const getPost = () => {
  const postId =  getPostIdParam();
  const url = `${API_URL}${postId}`;
  fetch(url, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }).then((data) => {
    buildPost(data);
  })
};

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string 
};