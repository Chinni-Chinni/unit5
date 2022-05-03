let container = document.getElementById("container");
// get the data from server -->  you handle the data;
// data packets
let url = "https://fakestoreapi.com/products";

// async and await comes as a pair;
// await only work when function has async in front of it;

/* 
        category: "men's clothing"
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
        id: 2
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        price: 22.3
        rating: {rate: 4.1, count: 259}
        title: "Mens Casual Premium Slim Fit T-Shirts "
      
      */

async function getData() {
  try {
    //stuff to happen upon successful response;
    let res = await fetch(url); //  does not move to the next line till this promise gets resolved;
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    // stuff to happen upon  unsuccessful response
    console.log(err);
  }
}

getData();

function displayData(data) {
  // [{},{},{}]
  data.forEach(function (product) {
    let productCard = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.image;
    let title = document.createElement("p");
    title.textContent = product.title;
    let price = document.createElement("p");
    price.textContent = product.price;

    productCard.append(img, title, price);
    container.append(productCard);
  });
}
