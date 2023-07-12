const inserirenome = (submitEvents) => {
  inserirenome.preventDefault();
  const form = submitEvents.target;
  const inputlist = form.elements;

  const name = {};
  for (let i = 0; i < inputlist.length; i++) {
    if (inputlist[i].tagName != "BUTTON") {
      const valoreInput = inputlist[i].value;
      const id = inputlist[i].id;
      name[idInput] = valoreInput;
    }
  }
};
console.log(name);
const conferma = confirm("confermi?");
if (conferma) {
  const container = document.querySelector(".registrato");
  const li = document.createElement("li");
  li.innerText = `${name.nome}`;
  `${name.password}`;
  container.appendChild(li);
  console.log("okay");
  li.innerText = "GRAZIE DI ESSERTI REGISTRATO!";
}
