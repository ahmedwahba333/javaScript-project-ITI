var items = JSON.parse(localStorage.getItem("userCards"));
let products;
var productApi = new XMLHttpRequest();
productApi.open("GET", "https://dummyjson.com/products");
productApi.send();
productApi.onreadystatechange = function () {
  if (productApi.readyState == 4 && productApi.status == 200) {
    products = JSON.parse(productApi.responseText).products;
    var count = 1;
    var totalPrice = 0;



    for (let x = 0; x < items.length; x++) {
      var totalItemPrice = 0;
      let choosenItem = products.find((product) => product.id == items[x]);

      document.getElementById("myDivAddToCart").innerHTML += `
          <div class="card mb-3 parentCard" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${choosenItem.thumbnail}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${choosenItem.title}</h5>
              <p class="card-text">${choosenItem.description}</p>
              <div class="container underCart">
              <i class="fa-solid fa-minus btn-success p-2 btnControl btnControlMinus"></i>
              <p class="card-text myCounter0">
               ${count}
              </p>
              <i class="fa-solid fa-plus btn-success p-2 btnControl btnControlPlus"></i>
              </div>
              <div class="underCardTotalPrice">
              <div>item price = <span class="myPrice">${choosenItem.price} $</span> </div>
              <div class="totalPriceDiv totalDisplayNone">total price = <span class="myCounter1">${count}</span> X <span class="myChoosenItem">${choosenItem.price}</span> $ = <span class="myTotalItemPrice">${totalItemPrice} $</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
      for (let i = 0; i < document.getElementsByClassName("btnControlPlus").length; i++) {
        let count = 1;
        document.getElementsByClassName("btnControlPlus")[i].addEventListener("click", () => {
          document.getElementsByClassName("totalPriceDiv")[i].classList.replace("totalDisplayNone", "totalDisplayBlock")
          count++;
          document.getElementsByClassName("myCounter0")[i].innerHTML = count;
          document.getElementsByClassName("myCounter1")[i].innerHTML = count;

          totalItemPrice = count * document.getElementsByClassName("myChoosenItem")[i].innerHTML

          document.getElementsByClassName("myTotalItemPrice")[i].innerHTML = totalItemPrice + " $";

          totalPrice += parseInt(document.getElementsByClassName("myPrice")[i].innerHTML);

          document.getElementById("myTotalPrice").innerHTML = totalPrice + " $";

        });



        document.getElementsByClassName("btnControlMinus")[i].addEventListener("click", () => {
          if (count > 0) {
            document.getElementsByClassName("totalPriceDiv")[i].classList.replace("totalDisplayNone", "totalDisplayBlock")
            count--;
            document.getElementsByClassName("myCounter0")[i].innerHTML = count;
            document.getElementsByClassName("myCounter1")[i].innerHTML = count;

            totalItemPrice = count * document.getElementsByClassName("myChoosenItem")[i].innerHTML

            document.getElementsByClassName("myTotalItemPrice")[i].innerHTML = totalItemPrice;

            totalPrice -= parseInt(document.getElementsByClassName("myPrice")[i].innerHTML);

            document.getElementById("myTotalPrice").innerHTML = totalPrice;
          } else if (count <= 0) {
            document.getElementsByClassName("parentCard")[i].classList.add("totalDisplayNone")
            console.log(count);
          }
        });

      }
    }
    console.log(totalPrice);

    for (
      let i = 0;
      i < document.getElementsByClassName("myPrice").length;
      i++
    ) {
      totalPrice += parseInt(
        document.getElementsByClassName("myPrice")[i].innerHTML
      );
      document.getElementById("myTotalPrice").innerHTML = totalPrice +" $";
    }

  }
};

myCart.innerHTML = localStorage.getItem("itemsLength");
document.getElementById("nameUser").innerHTML = `Hello ${localStorage.getItem("username")}`
