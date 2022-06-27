window.addEventListener('load', (event) => {
    toggleSearchForm();
  });


//Toggle search form
function toggleSearchForm(){
    let search = document.querySelector(".topbar__search");
    let searchWrap = document.querySelector(".topbar-social__wrap");
    let searchOverley = document.querySelector(".topbar__overlay");
    let searchInput = document.querySelector(".topbar-search__input input");

    search.addEventListener("click", function() {
        searchWrap.style.display = "block";
    });

    searchOverley.addEventListener("click", function(e) {
        e.stopPropagation();
        searchInput.value = "";
        searchWrap.style.display = "none";
    });
}

