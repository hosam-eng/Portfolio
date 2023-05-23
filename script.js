

var coll = document.getElementsByClassName('Experience');
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.lastElementChild;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.style.backgroundColor = "white"
            this.style.color="black";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.style.backgroundColor = "#6C42FF"
            this.style.color="white"
        }
    });
}

var contentdiv = coll[1].lastElementChild
contentdiv.style.maxHeight = contentdiv.scrollHeight + "px";
coll[1].style.backgroundColor = "#6C42FF"
coll[1].style.color = "white"