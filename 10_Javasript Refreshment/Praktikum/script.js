let productName = document.getElementById("validationName");
let productPrice = document.getElementById("validationNumber");
let productCategory = document.getElementById("validationDropdown");
let productImage = document.getElementById("validationFileInput");
let productText = document.getElementById("validationTextArea");
let Regex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;


function validateForm() {
    let productFresh = document.querySelector("input[name='flexRadio']:checked");


    // validation input 
    if (productName.value == "" || productPrice.value == "") {
        alert("Please enter a valid Input")
    } else if (productName.value.length > 10) {
        alert("Product Name must not exceed 25 characters.")
    } else if (productName.value.match(Regex)) {
        alert("Name must not contain symbols.");
    } else {
        alert("Product Name : " + productName.value + "\n" +
            "product Category : " + productCategory.value + "\n" +
            "Image of Product : " + productImage.value + "\n" +
            "Product Freshness : " + productFresh.value + "\n" +
            "Add Description : " + productText.value + "\n" +
            "product Price : $" + productPrice.value
        );
    }

}
