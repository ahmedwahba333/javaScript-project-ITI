
var products;
var productApi = new XMLHttpRequest();
productApi.open('GET', "https://dummyjson.com/products");
productApi.send();
productApi.onreadystatechange = function () {
    if (productApi.readyState == 4 && productApi.status == 200) {
        var products = JSON.parse(productApi.responseText).products
        for (var i = 0; i < products.length; i++) {
            document.getElementById('mydiv').innerHTML += `<div class="card">
        <img src=${products[i].thumbnail
                } alt="Denim Jeans" style="width:100%;height:300px">
        <h3>${products[i].title}</h3>
        <p class="price">${products[i].price} $</p>
        <p>${products[i].description}</p>
        <p><button onClick="add(${products[i].id})">Add to Cart</button></p>
      </div>`
        }
    }
}
document.getElementById("nameUser").innerHTML = `Hello ${localStorage.getItem("username")}`
// ............................................
var myArr = [];
function add(id) {
    myArr.push(id);
    console.log(myArr);
    localStorage.setItem("userCards", JSON.stringify(myArr));
    var myItems = JSON.parse(localStorage.getItem("userCards"));
    localStorage.setItem("itemsLength", JSON.stringify(myItems.length));
    myArr = myItems;
    myCart.innerHTML = localStorage.getItem("itemsLength");
}
if (JSON.parse(localStorage.getItem("userCards")) != null) {
    myArr = JSON.parse(localStorage.getItem("userCards"));
}
myCart.innerHTML = localStorage.getItem("itemsLength");

// .............................................


function search() {
    let filter = document.getElementById('search').value.toLowerCase().toUpperCase();
    let item = document.querySelectorAll('.card');
    let l = document.getElementsByTagName('h3');
    for (var i = 0; i <= l.length; i++) {
        var ProductName = item[i].getElementsByTagName('h3')[0];
        let value = ProductName.innerHTML;
        if (value.toLowerCase().toUpperCase().indexOf(filter) != -1) {
            item[i].style.display = "block";
        }
        else {
            item[i].style.display = "none";
        }

      
    } 
    
   
}


// .......................................


function filter() {
    var card = document.querySelectorAll('.card');
    var x = document.getElementsByClassName('price')
    for (var i = 0; i <= x.length; i++) {
        var ProductPrice = card[i].getElementsByClassName('price')[0];
        var value1 = ProductPrice.innerHTML
        var value2 = parseInt(value1);
        if (value2 <=100) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }

    }
}



function filter2() {
    var card = document.querySelectorAll('.card');
    var x = document.getElementsByClassName('price')
    for (var i = 0; i <= x.length; i++) {
        var ProductPrice = card[i].getElementsByClassName('price')[0];
        var value1 = ProductPrice.innerHTML
        var value2 = parseInt(value1);
        if (value2 <= 500 ) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }

    }
}




function filter3() {
    var card = document.querySelectorAll('.card');
    var x = document.getElementsByClassName('price')
    for (var i = 0; i <= x.length; i++) {
        var ProductPrice = card[i].getElementsByClassName('price')[0];
        var value1 = ProductPrice.innerHTML
        var value2 = parseInt(value1);
        if (value2 <= 1000) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }

    }
}




function filter4() {
    var card = document.querySelectorAll('.card');
    var x = document.getElementsByClassName('price')
    for (var i = 0; i <= x.length; i++) {
        var ProductPrice = card[i].getElementsByClassName('price')[0];
        var value1 = ProductPrice.innerHTML
        var value2 = parseInt(value1);
        if (value2 <= 1500) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }

    }
}




inputprice.oninput = function () {
    valueprice.innerHTML = inputprice.value

}


function filter6() {

    let inputprice = document.getElementById("range");
    let valueprice = document.getElementById("value");
    let output = valueprice.innerHTML = (inputprice.value)
    var card = document.querySelectorAll('.card');
    var x = document.getElementsByClassName('price')
    for (var i = 0; i <= x.length; i++) {
        var ProductPrice = card[i].getElementsByClassName('price')[0];
        var value1 = ProductPrice.innerHTML
        var value2 = parseInt(value1);
        if (value2 <= output) {
            card[i].style.display = "block";
        } else {
            card[i].style.display = "none";
        }

    }
}
