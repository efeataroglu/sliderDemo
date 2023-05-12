let cars = [
  {
    brand: "Audi",
    model: "35 TFSI Advanced",
    fuel: "Gasoline",
    KM: "32.978",
    price: "1.461.000 TL",
    image: "src/img/audi.png",
    link: "https://www.sahibinden.com/ilan/vasita-arazi-suv-pickup-audi-otokoc-2-el-izmir-bornova-dan-2021-audi-q2-35-tfsi-advanced-1095249205/detay",
  },
  {
    brand: "Ford",
    model: "1.5 TDCi Trend X",
    fuel: "Diesel",
    KM: "121.835",
    price: "935.000 TL",
    image: "src/img/ford.png",
    link: "https://www.sahibinden.com/ilan/vasita-otomobil-ford-otokoc-2.el-izmir-bornova-2020-ford-focus-1.5-tdci-trendx-auto-1097345570/detay",
  },
  {
    brand: "Peugeot",
    model: "1.5 BlueHDI Active Comfort",
    fuel: "Diesel",
    KM: "90.598",
    price: "694.500 TL",
    image: "src/img/peugeot.png",
    link: "https://www.sahibinden.com/ilan/vasita-minivan-panelvan-peugeot-otokoc-2-el-izmir-bornova-2019-rifter-1.5hdi-activecomfort-eat8-1095555169/detay",
  },
];

let index = 0;
const slideCount = cars.length;
showSlide(index);
function showSlide(i) {
  index = i;

  if (i < 0) {
    slideCount - 1;
  }

  if (i >= slideCount) {
    index = 0;
  }

  // Image
  document
    .querySelector(".card-img-top")
    .setAttribute("src", cars[index].image);
  // Brand
  document.querySelector(".card-title").textContent = cars[index].brand;

  // Model
  document.querySelector(".model").textContent = cars[index].model;

  // Fuel
  document.querySelector(".fuel").textContent = cars[index].fuel;

  // KM
  document.querySelector(".km").textContent = cars[index].KM;

  // Price
  document.querySelector(".price").textContent = cars[index].price;

  // Link
  document.querySelector(".card-link").setAttribute("href", cars[index].link);
}

document
  .querySelector(".fa-circle-arrow-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });

document
  .querySelector(".fa-circle-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });
