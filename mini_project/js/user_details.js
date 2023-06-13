url = new URL(location.href);
userId = url.searchParams.get("id")

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,)
  .then((response) => response.json())
  .then((obj) => {
    const user_block = document.getElementsByClassName("user_details")[0];
    const ul = document.createElement("ul");
    ul.classList.add("main_ul")
    recursiveUserConstructor(obj, ul);
    user_block.appendChild(ul);
    button();
  })

function UlCreator(key, obj, parent) {
  let li = document.createElement("li");
  let ul = document.createElement("ul");
  li.innerHTML = `<b>${key}:</b>`;
  parent.appendChild(li);
  li.appendChild(ul);
  recursiveUserConstructor(obj, ul);
}

function LiCreator(key, value, parent) {
  let li = document.createElement("li");
  li.innerHTML = `<b>${key}: </b> ${value}`;
  parent.appendChild(li);
}

function recursiveUserConstructor(obj, parent) {
  for (const key in obj) {
    typeof obj[key] === "object"
      ? UlCreator(key, obj[key], parent)
      : LiCreator(key, obj[key], parent)
  }
}

function button() {
  const button = document.getElementsByClassName("posts_show_button")[0];
  button.innerText = "posts of current user";

  button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(posts => {
        let posts_block = document.getElementsByClassName("posts_block")[0];
        for (let post of posts) {
          let p = document.createElement("p");
          p.classList.add("user_post_preview");
          let postId = post.id;
          p.innerHTML = `<a href='/js____hw/mini_project/html/post_details.html/?postId=${postId}'>${post.title}</a>`;
          posts_block.appendChild(p);
        }
      })
  }
}
