const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];
// Array para armazenar os objetos de quadros
const paintingsArray = [];

// Array para armazenar os objetos de action figures
const actionFiguresArray = [];

//para separar os produtos pelos tipos
function separateItems(products) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "Paintings") {
      paintingsArray.push(products[i]);
    } else if (products[i].type === "Action Figures") {
      actionFiguresArray.push(products[i]);
    }
  }
}

// Chamada dapara separar os produtos
separateItems(productsArray);

//para criar o elemento de imagem
function createImageElement(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

//para criar o elemento de título
function createTitleElement(title) {
  const h3 = document.createElement("h3");
  h3.textContent = title;
  return h3;
}

//para criar o elemento de preço
function createPriceElement(price) {
  const p = document.createElement("p");
  p.textContent = price;
  return p;
}

//para criar o card do produto
function createProductCard(product) {
  const li = document.createElement("li");

  const image = createImageElement(product.image);
  li.appendChild(image);

  const title = createTitleElement(product.name);
  li.appendChild(title);

  const price = createPriceElement(product.price);
  li.appendChild(price);

  return li;
}

//para adicionar os produtos à lista de quadros
function addPaintingsToDOM() {
  const paintingsList = document.getElementById("paintingsList");

  paintingsArray.forEach(function (product) {
    const card = createProductCard(product);
    paintingsList.appendChild(card);
  });
}

//para adicionar os produtos à lista de action figures
function addActionFiguresToDOM() {
  const actionList = document.getElementById("actionList");

  actionFiguresArray.forEach(function (product) {
    const card = createProductCard(product);
    actionList.appendChild(card);
  });
}

// Chamada das funções para adicionar os produtos ao DOM
addPaintingsToDOM();
addActionFiguresToDOM();