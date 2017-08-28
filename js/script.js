window.onload = function(){
  var menu = document.querySelector(".main-header");
  var lists = document.querySelector(".main-header__lists");

  menu.addEventListener("click", function(event){
    lists.classList.toggle("main-header__lists--close");
  });
}
