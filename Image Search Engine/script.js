const accessKey = ""; //Your Api key
const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMore = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;
async function SearchImage() {
  keyword = SearchBox.value;
  const url = ``; //API URL
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    SearchResult.innerHTML = "";
  }
  const results = data.results;
  console.log(results);

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    SearchResult.appendChild(imageLink);
  });
  ShowMore.style.display = "block";
}
SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  SearchImage();
});
ShowMore.addEventListener("click", () => {
  page++;
  SearchImage();
});
