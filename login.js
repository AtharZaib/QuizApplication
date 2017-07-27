var namee = document.getElementById('name1');
var pw = document.getElementById('pw');

function store() {
    localStorage.setItem('n', namee.value);
    localStorage.setItem('pw', pw.value);
}

function check() {
    var storedName = localStorage.getItem('n');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if (userName.value == storedName && userPw.value == storedPw) {


        redirect();

    } else {

        alert('ERROR');

    }
}

function redirect() {
    window.location.assign("http://www.me.com/lojack.html#guarantee")
}