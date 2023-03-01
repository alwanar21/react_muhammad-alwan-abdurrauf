let productName = document.getElementById("validationName");
let productPrice = document.getElementById("validationNumber");
let productCategory = document.getElementById("validationDropdown");
let productImage = document.getElementById("validationFileInput");
let productText = document.getElementById("validationTextArea");
let Regex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;


function validateForm() {
    let productFresh = document.querySelector("input[name='flexRadio']:checked");
    let table = document.getElementById("tBody");
    let row = document.createElement("tr")

    // Create cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    let c6 = document.createElement("td")
    let c7 = document.createElement("td")


    // validation input
    if (productName.value == "" || productPrice.value == "") {
        alert("Please enter a valid Input")
    } else if (productName.value.length > 10) {
        alert("Product Name must not exceed 25 characters.")
    } else if (productName.value.match(Regex)) {
        alert("Name must not contain symbols.");
    } else {
        c1.innerText = 1000
        c3.innerText = productName.value
        c4.innerText = productCategory.value
        c5.innerText = productImage.value
        c6.innerText = productFresh.value
        c7.innerText = productText.value
        c8.innerText = productPrice.value


        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);
        row.appendChild(c6);
        row.appendChild(c7);

        table.appendChild(row)

    }

}
