
const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Smartphone", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "Camera", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Sneakers", category: "clothing" },
  { name: "Book: JavaScript Basics", category: "books" },
  { name: "Book: UI/UX Design", category: "books" }
];

const productList = document.getElementById("productList");
const allBtn = document.getElementById("allBtn");
const elecBtn = document.getElementById("elecBtn");
const clothBtn = document.getElementById("clothBtn");
const searchBox = document.getElementById("searchBox");

function displayProducts(list) {
  productList.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product-item");
    div.textContent = `${p.name} (${p.category})`;
    productList.appendChild(div);
  });
}


allBtn.addEventListener("click", () => displayProducts(products));

elecBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "electronics");
  displayProducts(filtered);
});

clothBtn.addEventListener("click", () => {
  const filtered = products.filter(p => p.category === "clothing");
  displayProducts(filtered);
});


searchBox.addEventListener("input", () => {
  const keyword = searchBox.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  displayProducts(filtered);
});

displayProducts(products);
