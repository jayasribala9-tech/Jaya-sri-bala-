const searchBox = document.getElementById("searchBox");
const fruits = document.querySelectorAll("#fruitList li");

searchBox.addEventListener("keyup", function () {
  let searchValue = searchBox.value.toLowerCase();

  fruits.forEach(function (fruit) {
    let fruitName = fruit.textContent.toLowerCase();

    if (fruitName.includes(searchValue)) {
      fruit.style.display = "block";
    } else {
      fruit.style.display = "none";
    }
  });
});
