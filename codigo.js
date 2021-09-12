class Product {
  constructor(description, price, type) {
    this.description = description;
    this.price = price;
    this.type = type;
    this.status = "Active";
  }
  getInfo() {
    return "Descripción: " + this.description + " Precio: " + this.price;
  }
}

function createProduct() {
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let type = document.getElementById("type").value;
  let productList = new Array();

  if (localStorage.getItem("productList") !== null) {
    productList = JSON.parse(localStorage.getItem("productList"));
  }

  if (description != "" && price != "" && type != "") {
    let product = new Product(description, price, type);

    productList.push(product);
    localStorage.setItem("productList", JSON.stringify(productList));
  }
}

function listProduct() {
  let productStorageList = new Array();
  productStorageList = JSON.parse(localStorage.getItem("productList"));
  let item = 0;
  let products = "Lista de productos \n";

  for (let i = 0; i < productStorageList.length; i++) {
    item++;
    products +=
      "N°" +
      item +
      " " +
      productStorageList[i].description +
      " " +
      productStorageList[i].type +
      " " +
      productStorageList[i].price +
      "\n";
  }
  alert(products);
}
