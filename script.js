document.getElementById('pwconf').addEventListener('focusout', (e) => {
    const password = document.getElementById('pw').value;
    const alert = document.getElementById('nomatch');
    if (e.target.value != password) {
        console.log(alert);
        alert.setAttribute('style', 'visibility: visibile;');
    } else {
        console.log(alert);
        alert.setAttribute('style', 'visibility: hidden');
    } 
});