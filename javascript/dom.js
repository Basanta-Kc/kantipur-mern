const ul = document.querySelector("ul");
console.log(ul);

ul.innerHTML = "<li> test </li> <li> another </li>";

const form = document.querySelector("form");

// document.getElementById("body").addEventListener("click", (e) => {
//   console.log("any where in the body");
//   console.log(e);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("input").value;
  alert(username);
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(e);
  alert("heeloo");
});

const tasks = ["learn html", "learn css", "learn php"];
