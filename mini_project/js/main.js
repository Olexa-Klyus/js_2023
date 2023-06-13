fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let wrap_div = document.getElementsByClassName("wrap")[0];
    for (const jsonElement of json) {
      div = document.createElement("div");
      div.classList.add("user_preview")
      div.innerText = `#${jsonElement.id} ${jsonElement.name}`;
      wrap_div.appendChild(div);

      const button = document.createElement("button");
      button.innerText = "details";
      button.classList.add("user_preview_button")
      button.onclick = () => {
        location.href = `user_details.html/?id=${jsonElement.id}`;
      }
      div.appendChild(button);
    }
  });
