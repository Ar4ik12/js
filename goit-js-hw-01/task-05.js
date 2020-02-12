'use strict'

let priceDelivery;

const countryDelivery = prompt("Страна доставки?");
const countryDeliveryLow = countryDelivery.toLowerCase();

switch (countryDeliveryLow) {
    case "китай":
        priceDelivery = 100;
        alert(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);
        break;
    case "чили":
        priceDelivery = 250;
        alert(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);
        break;
    case "австралия":
        priceDelivery = 170;
        alert(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);
        break;
    case "индия":
        priceDelivery = 80;
        alert(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);
        break;
    case "ямайка":
        priceDelivery = 120;
        alert(`Доставка в ${countryDelivery} будет стоить ${priceDelivery} кредитов`);
        break;
    default:
        alert("В вашей стране доставка не доступна")
}