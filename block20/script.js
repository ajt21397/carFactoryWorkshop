// Access the root element using JavaScript.
const rootDiv = document.getElementById('root');

// Create an h1 element with the name of a famous piece of art: Mona Lisa.
const h1 = document.createElement("h1");
h1.innerHTML = "MONA LISA";

rootDiv.appendChild(h1);

const img = document.createElement("img");
img.src = './assets/mona_lisa.jpg';
root.appendChild(img);

const p = document.createElement("p");
p.innerText = "The Mona Lisa is a famous painting.";
root.appendChild(p);