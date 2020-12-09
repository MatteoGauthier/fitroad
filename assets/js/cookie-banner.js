var cookieBanner;

function OnCookiesBannerLoaded ()
{
    cookieBanner = document.getElementById("cookie-banner");

    // Si le visiteur n'est pas venu depuis 1 jour il faut afficher de nouveau la baniere
    if(document.cookie == "" || Date.now() - parseInt(document.cookie) > 1) //86400000
    {
        cookieBanner.style.display = "block";
    }
}

function OnAcceptCookies () 
{
    cookieBanner.style.display = "none";
    
    document.cookie = Date.now();
}

function OnRefuseCookies ()
{
    open("https://google.com/", "_self");
}