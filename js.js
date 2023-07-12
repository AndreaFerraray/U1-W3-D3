const addtask = (submitevent) => {
  submitevent.preventDefault();

  const input = document.querySelector("input#task");
  console.log(input.value);
};
const ul = document.querySelector("ul");

ul.innerHTML += `<li> ${input.value} </li>`;
console.log(li);
