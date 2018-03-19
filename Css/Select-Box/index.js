window.onload = function(){
    let tab = document.getElementById("tab");
    let lis = tab.getElementsByTagName("li");
    let text = document.getElementById("text");
    let con = text.getElementsByTagName("div");
    for (let i = 0; i< lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function(){
            for(let i=0; i<lis.length; i++ ){
                lis[i].className = "";
                con[i].className = "";
            }
            this.className = "sec";
            con[this.index].className = "cur";
        }
    }
};