function OnAcceptCookies () 
{
    var elem = document.getElementById("cookie-banner");
    elem.style.display = "none";
}

function OnRefuseCookies () 
{
    open("https://google.com/", "_self");
}