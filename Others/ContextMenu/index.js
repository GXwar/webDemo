window.onload = function () {
  let menu = document.getElementById("menu");
  let lis = menu.getElementsByTagName("li");
  let list = document.getElementById("list");
  let lits = list.getElementsByTagName("li");
  let imgs = list.getElementsByTagName("img");
  let close = document.getElementById("close");

  document.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    menu.style.display = "block";
    menu.style.left = ev.clientX + "px";
    menu.style.top = ev.clientY + scrollTop + "px";

    // add function updateBackground
    lis[5].addEventListener('click', () => {
      list.style.display = "block";
    });

    // click the images to change background
    for(let i =0; i<lits.length; i++ ){
      lits[i].index = i;
      lits[i].addEventListener('click', () => {
        let src = imgs[lits[i].index+1].src;
        let bImg = src.replace("s_","");
        document.body.style.background = "url("+ bImg +")";
      });
    }

    close.addEventListener("click", (ev) => {
      list.style.display = "none";
      ev.stopPropagation();
    })

  });

  document.addEventListener('click', () => {
    menu.style.display = "none";
  })
};