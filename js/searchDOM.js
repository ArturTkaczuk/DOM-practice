const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchQuery = searchForm.children.searchQuery.value;
  const searchedElements = getSearchData(searchQuery);
  addSearchDataToDOM(searchedElements);
});

function getSearchData(searchQuery) {
  return document.querySelectorAll(searchQuery);
}

function addSearchDataToDOM(searchedElements) {
  const searchField = document.querySelector(".search-data");
  searchField.innerText = "";

  searchedElements.forEach((element) => {
    const elementInfo = document.createElement("div");
    elementInfo.innerHTML = `
    <p>${element.tagName}</p>
    <p>klasy: ${element.className}</p>
    <p>Wysokość elementu (offsetHeight): ${element.offsetHeight}</p>
    <p>Szerokość elementu (offsetWidth): ${element.offsetWidth}</p>
    <p>Odległość od lewej krawędzi (offsetLeft): ${element.offsetLeft}</p>
    <p>Odległość od górnej krawędzi (offsetTop): ${element.offsetTop}</p>
    <p>Liczba elementów dzieci (childElementCount): ${element.childElementCount}</p>
    `;
    searchField.appendChild(elementInfo);
  });
}
