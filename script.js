function showDiv(divId) {
    // get a list (array) of all page elements 
    // with a class="main" (3 DIVs in our example) 
    var maindivs = document.getElementsByClassName("main");

    // loop through "main" DIVs & hide each
    // by setting CSS property display:none
    var i;
    for (i = 0; i < maindivs.length; i++) {
        maindivs[i].style.display = "none";
    }

    // finally display the DIV whose id. was passed in
    // by setting CSS property display:block
    var div = document.getElementById(divId);
    div.style.display = "block";
    
    var pagelinks = document.querySelectorAll("a.pagelink");
    for (i = 0; i < pagelinks.length; i++) {
        if ( pagelinks[i].id===divId+'link' ) {
            pagelinks[i].className += " selected";
        } else {
            pagelinks[i].className = "pagelink";
        }
    }
    return;
}