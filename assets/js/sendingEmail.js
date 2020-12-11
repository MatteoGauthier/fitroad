function sendEmailContact()
{
    location.href= 'mailto:contact.fitroad@gmail.com?subject=Message de contact&body='
     + document.getElementById('firstname').value + '%0A' +  document.getElementById('name').value + 
     '%0A%0A' + document.getElementById('message').value;
}