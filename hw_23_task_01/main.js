const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const ALL_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const commentsList = document.querySelector(".comments__list");
const postTitle = document.querySelector(".post__title");
const postBody = document.querySelector(".post__body");
const post = document.querySelector(".post");
const postFormInput = document.querySelector(".post__form-input");
const form = document.querySelector(".post__form");

const createElement = (tagName, attributes, text) => {
  const el = document.createElement(tagName);

  if (attributes) {
    Object.entries(attributes).forEach(([attribute, value]) => {
      el.setAttribute(attribute, value);
    });
  }

  if (text) {
    el.textContent = text;
  }
  return el;
};

const renderPost = async (postData) => {
  postTitle.innerText = postData.title;
  postBody.innerText = postData.body;
  post.style.display = "block";
  const comments = await fetchPostComments(postData.id);
  commentsList.innerHTML = "";
  comments.forEach((comment) => {
    renderComment(comment);
  });
};

const renderComment = (comment) => {
  const commentSpan = createElement(
    "span",
    { class: "post__comments-span" },
    comment.body
  );

  commentsList.appendChild(commentSpan);
};

//Gets comments by id

const fetchPostComments = async (id) => {
  try {
    const commentsResponse = await fetch(`${ALL_POSTS_URL}/${id}/comments`);
    const comments = await commentsResponse.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
};

//Gets posts by id

const searchPostById = async (id) => {
  try {
    const postId = await fetch(`${ALL_POSTS_URL}/${id}`);
    const post = await postId.json();
    renderPost(post);
  } catch (error) {
    console.log(error);
  }
};

//Gets all posts

const handleSubmit = (event) => {
  event.preventDefault();
  if (postFormInput.value < 0 || postFormInput.value >= 100) {
    alert("No post founded");
    return;
  }
  searchPostById(postFormInput.value);
  postFormInput.value = "";
};

const init = async () => {
  try {
    const response = await fetch(ALL_POSTS_URL);
    const posts = await response.json();
    renderPost(posts[0]);
  } catch (error) {
    console.log(error);
  }
  form.addEventListener("submit", handleSubmit);
};
init();
