url = new URL(location.href);
postId = url.searchParams.get("postId")

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,)
  .then((response) => response.json())
  .then((post) => {
    console.log(post)
    let post_block = document.getElementsByClassName("post_details")[0];

    let userId_block = document.createElement("div");
    userId_block.innerHTML = `<b>User's id:</b> ${post.userId}`;
    userId_block.classList.add("post_userId");

    let id_block = document.createElement("div");
    id_block.innerHTML = `<b>Post id:</b> ${post.id}`;
    id_block.classList.add("post_id");

    let title_block = document.createElement("div");
    title_block.classList.add("post_title");
    title_block.innerHTML = `<b>«${post.title}»</b>`;

    let body_block = document.createElement("div");
    body_block.innerHTML = `<b>Post:</b> ${post.body}`;

    post_block.appendChild(title_block);
    post_block.appendChild(body_block);
    post_block.appendChild(userId_block);
    post_block.appendChild(id_block);

    showComments();
  })

let showComments = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`,)
    .then((response) => response.json())
    .then((comments) => {
      let comments_wrap = document.getElementsByClassName("comments_wrap")[0];

      for (const comment of comments) {
        let comm_block = document.createElement("div");
        comm_block.classList.add("comment");

        for (const key in comment) {
          let item_x = document.createElement("div");
          if (key === "body") {
            item_x.innerHTML = `<br><b>«${comment[key]}»</b>`;
            item_x.classList.add("comment_text");
          } else {
            item_x.innerHTML = `<b>${key}:</b> ${comment[key]}`
          }
          comm_block.appendChild(item_x);
        }
        comments_wrap.appendChild(comm_block);
      }
    })
}
