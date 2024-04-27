function calculatePrice() {
    var price = parseFloat(document.getElementById("price").value);
    var discountCode = document.getElementById("discountCode").value;

    var inputParagraph = document.getElementById("input");
    inputParagraph.textContent = "Input: $" + price + ", "  + discountCode;


    var discountPercentage;

    switch(discountCode) {
        case "SAVE20":
            discountPercentage = 0.20;
            break;
        case "JOLLYDAYS":
            discountPercentage = 0.15;
            break;
        case "HOLIDAY10":
            discountPercentage = 0.10;
            break;
        default:
            discountPercentage = 0;
            break;
    }

    var newPrice;
    newPrice = price - (price * discountPercentage);

    var savedAmount;
    savedAmount = price * discountPercentage;

    newPrice += newPrice * 0.07;

    var endResult = document.getElementById("result");
    endResult.innerHTML = "Your Total: $" + newPrice.toFixed(2) + "<br/>";
    endResult.innerHTML += "You saved $" + savedAmount.toFixed(2) + "!";
}
