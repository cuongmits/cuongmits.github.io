$(document).ready(function(){
	var coll = document.getElementsByClassName("collapsible");

	for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            this.innerHTML = this.innerHTML == "More..." ? "Less..." : "More...";
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
	}
});