let dictionary = "";
if (document.getElementById("lowercaseCb").checked) {
    dictionary += 'qwertyuiopasdfghjklzxcvbnm';
}
if (document.getElementById('uppercaseCb').checked) {
    dictionary += 'QWERTYUIOPLKJHGFDSAZXCVBNM';
}
if (document.getElementById('digitsCb').checked) {
    dictionary += '1234567890' ;
}
if (document.getElementById('specialsCb').checked) {
    dictionary += "!@#$%^&*()_+-={}[];<>:" ;
}

