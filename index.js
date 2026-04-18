const base_url = "https://jsonplaceholder.typicode.com/posts";

function getRandomPosts(posts, count) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayPosts(posts) {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

async function fetchPosts() {
  const postList = document.getElementById("post-list");

  try {
    postList.innerHTML = "<p>Loading posts...</p>";

    const response = await fetch(base_url);
    if (!response.ok) throw new Error("Failed to fetch posts");

    const posts = await response.json();

    const selectedPosts = posts.slice(0, 5);
    displayPosts(selectedPosts);
  } catch (error) {
    postList.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

fetchPosts();
