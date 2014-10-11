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

    // display the DIV whose id. was passed in
    // by setting CSS property display:block
    var div = document.getElementById(divId);
    div.style.display = "block";
    
    // get a list of all anchor tag elements in div id=nav
    var navlinks = document.querySelectorAll("#nav a");
    
    // loop through the nav anchor tags
    // if the anchor tag is for the div id. we passed in, 
    // then set its class to "selected" (so it appears in bold)
    // else just set its class to blank
    for (i = 0; i < navlinks.length; i++) {
        if ( navlinks[i].id === divId + 'link' ) {
            navlinks[i].className = "selected";
        } else {
            navlinks[i].className = "";
        }
    }
    
    return;
}
