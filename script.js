"use strict";

// get button elements from the DOM
const btn_add_shoes = document.querySelector(".add_item_shoes");
const btn_add_shirts = document.querySelector(".add_item_shirts");
const btn_add_pants = document.querySelector(".add_item_pants");

const btn_rm_shoes = document.querySelector(".remove_shoes");
const btn_rm_shirts = document.querySelector(".remove_shirts");
const btn_rm_pants = document.querySelector(".remove_pants");
const btn_buy = document.querySelector(".buy_cartItems");

const item_quantity = document.querySelector(".item_quantity");

const total_price = document.querySelector(".sum_price");

//Object for the items in the cart
const shoes = {
  name: "Air Max",
  price: 100,
  quantity: 0,
};

const shirts = {
  name: "Lob",
  price: 50,
  quantity: 0,
};
const pants = {
  name: "HxA",
  price: 70,
  quantity: 0,
};

let sum = 0;
let quantity = 0;

//alert discount function
function alert_discount() {
  alert_discount = function () {};

  if (sum >= 100) {
    alert("You got a 10% discount!");
  }
}
//Discount function for the sum_price
function discount() {
  if (sum >= 100) return sum * 0.9;
  else return (sum = sum);
}

//when clicked 'add_item' add the target object 'price' to sum and display the 'total_price' to the dom
btn_add_shoes.addEventListener("click", function () {
  //when clicked 'add_item' add the target object 'quantity' to the target object 'quantity' and display the 'item_quantity' to the dom
  shoes.quantity++;
  quantity++;
  document.querySelector(".item_quantity").innerHTML = `Quantity:${quantity}`;

  shoes.price = 0;
  shoes.price = 100 * shoes.quantity;
  sum = sum + 100;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;

  document.querySelector(".sum_price").innerHTML = `${discount()}$`;

  alert_discount();
});

//push the obgect property 'price' of the object 'shirts' to the array 'cart' and display the total price of the cart in the DOM
btn_add_shirts.addEventListener("click", function () {
  shirts.quantity++;
  quantity++;
  document.querySelector(".item_quantity").innerHTML = `Quantity:${quantity}`;

  shirts.price = 0;
  shirts.price = 50 * shirts.quantity;
  sum = sum + 50;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;
  document.querySelector(".sum_price").innerHTML = `${discount()}$`;

  alert_discount();
});
//push the obgect property 'price' of the object 'pants' to the array 'cart' and display the total price of the cart in the DOM
btn_add_pants.addEventListener("click", function () {
  pants.quantity++;
  quantity++;
  document.querySelector(".item_quantity").innerHTML = `Quantity:${quantity}`;

  pants.price = 0;
  pants.price = 70 * pants.quantity;
  sum = sum + 70;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;
  document.querySelector(".sum_price").innerHTML = `${discount()}$`;
  alert_discount();
});

//when 'btn_rm_shoes' is clicked subtract from the sum the object 'price' of the target object and display the 'total_price' in the DOM

btn_rm_shoes.addEventListener("click", function () {
  if (shoes.quantity > 0) {
    shoes.quantity--;
    quantity--;
    shoes.price = 0;
    shoes.price = 100 * shoes.quantity;
    sum = sum - 100;
  }

  document.querySelector(".item_quantity").innerHTML = `Quantity: ${quantity}`;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;
  document.querySelector(".sum_price").innerHTML = `${discount()}$`;

  alert_discount();
});

//when 'btn_rm_shirts' is clicked subtract from the sum the object 'price' of the target object and display the 'total_price' in the DOM
btn_rm_shirts.addEventListener("click", function () {
  if (shirts.quantity > 0) {
    shirts.quantity--;
    quantity--;
    shirts.price = 0;
    shirts.price = 50 * shoes.quantity;
    sum = sum - 50;
  }
  document.querySelector(".item_quantity").innerHTML = `Quantity:${quantity}`;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;
  document.querySelector(".sum_price").innerHTML = `${discount()}$`;
});

//when 'btn_rm_pants' is clicked subtract from the sum the object 'price' of the target object and display the 'total_price' in the DOM
btn_rm_pants.addEventListener("click", function () {
  if (pants.quantity > 0) {
    pants.quantity--;
    quantity--;
    pants.price = 0;
    pants.price = 70 * shoes.quantity;
    sum = sum - 70;
  }
  document.querySelector(".item_quantity").innerHTML = `Quantity:${quantity}`;

  document.querySelector(".sum_price").innerHTML = `${sum}$`;
  document.querySelector(".sum_price").innerHTML = `${discount()}$`;
});

//when 'btn_buy' is clicked alert the total price of the cart
btn_buy.addEventListener("click", function () {
  if (sum === 0) {
    alert("Your cart is empty 😑");
  } else {
    alert(
      `Thank you for your purchase🥳! you have been charged ${discount()} $`
    );
  }

  document.querySelector(".sum_price").innerHTML = `0$`;
  document.querySelector(".item_quantity").innerHTML = `Quantity: 0`;

  console.log(`YOU ${quantity} BUYED ITEMS`);
  
});
