const ALL_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const ALL_COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const commentsList = document.querySelector(".comments__list");

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

const form = document.querySelector(".post__form");
const renderPost = async (postData) => {
  document.querySelector(".post__title").innerText = postData.title;
  document.querySelector(".post__body").innerText = postData.body;
  document.querySelector(".post").style.display = "block";
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
    console.log(post);
    renderPost(post);
  } catch (error) {
    console.log(error);
  }
};

//Gets all posts

const handleSubmit = (event) => {
  event.preventDefault();
  let id = document.querySelector(".post__form-input").value;
  searchPostById(id);
  document.querySelector(".post__form-input").value = "";
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
