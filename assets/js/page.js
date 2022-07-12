window.addEventListener('load', (event) => {
    loading();

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

//loading
function loading(){
    $('.loading__bar').delay(1500).animate({left: '0'}, 1000);
    $('.loading__box').delay(500).animate({opacity: '1'}, 1000);
    $('.loading__circle').delay(3000).animate({opacity: '0'}, 500);
    setTimeout(() => {
        $(".loading").css("display","none");
        $(".main").css("display","block");
    }, 3000);
}

