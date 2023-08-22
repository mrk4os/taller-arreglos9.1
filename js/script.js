// Array extraño

const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
  "Revivan el server",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla

function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  const arrayFiltrada = strangeArray.filter(elemento => typeof elemento === "string"); // LA OPCION MAS COMPACTA Y PRECISA
  arrayFiltrada.sort((a, b) => a.localeCompare(b));
  showList(arrayFiltrada);
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// document.addEventListener("DOMContentLoaded", (e) => {
//   const arrayFiltrada = strangeArray.filter(elemento => typeof elemento === "string"); // filtro

//   arrayFiltrada.sort(function (a, b) {            // Segundo metodo para ordenar

//     if (a.toLowerCase() < b.toLowerCase()) {
//       return -1;
//     }
//     if (a.toLowerCase() < b.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   })
//   showList(arrayFiltrada);

//   console.log(arrayFiltrada);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// document.addEventListener("DOMContentLoaded", (e) => {
//   const arrayFiltrada = strangeArray.filter(elemento => typeof elemento === "string").map(element => {
//     return element.toLowerCase(); //Filtra el array mostrando solo los elementos de tipo string
//   });                             //Luego pasa todos los elementos del nuevo array a minusculas para ordenar mas facilmente
//   arrayFiltrada.sort();           //Con el inconveniente de tener que cambiar a todo minusculas
//   showList(arrayFiltrada);
// })



