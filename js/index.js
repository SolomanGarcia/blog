

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
  fetch(API_URL, {
    method: 'GET'
  }).then((response) => {
    return response.json();
  }).then((data) => {
    buildPosts(data);
  })
}

const buildPosts = (blogPosts) => {
  let blogPostscontent = '';

  for (blogPosts of blogPosts) {
    const postDate = new Date(blogPost.added_date).toDateString();
    blogPostscontent += `
    <div class="post">
        <div class="post-image"></div>
        <div class="post-content">
          <div class="post-date">${postDate}</div>
          <div class="post-title"><h4>${blogPost.title}</h4></div>
          <div class="post-text">${blogPost.content}</div>
        </div>
    </div>
    `
  }
}