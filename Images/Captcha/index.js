function createCode() {
    // initialize the captcha
    captcha = '';
    // set the length of the captcha
    let codeLen = 4;
    let random = [0,1,2,3,4,5,6,7,8,9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'];
    for (let i=0; i<codeLen; i++) {
        let index = Math.floor(Math.random()*36);
        captcha += random[index];
    }
    document.getElementById("code").innerHTML=captcha;
}

function validate() {
    let input = document.getElementById("text").value.toUpperCase();
    if (input === '') {
        alert('Please input the code');
    }
    else if (input !== captcha) {
        alert('Wrong code, please input again!');
        input = '';
        createCode();
    }
    else {
        alert('Verify success');
    }
}

// main
let captcha;
window.onload(createCode());