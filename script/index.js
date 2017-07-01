var runBtn = document.getElementsByClassName("button")[0];
    runBtn.addEventListener("click", animate);

function animate() {
    var img = document.querySelector("img");
    var src = "",
        yes = "assets/images/Yes.png",
        no = "assets/images/no.png";
    var start = setInterval(function(){
        src = src === no? yes : no;
        img.setAttribute("src", src)
     }, 100);
    setTimeout(function () {
        clearInterval(start);
        var luck = Math.round(Math.random());
        src = luck? yes: no;
        img.setAttribute("src", src);
        console.log(luck);
    }, 1000);
}

