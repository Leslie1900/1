// 手机发送验证码倒计时
var btn = document.getElementById("btn")
var times = 60
var what_time = parseInt(Math.random() * 58)+1
var random_sz = parseInt(Math.random() * 8999) + 1000
console.log(what_time);
function send() {
    if (times == 1) {
        btn.removeAttribute('disabled')
        btn.innerHTML = "重新发送"
        times = 60
    } else {
        btn.setAttribute('disabled', true)
        times--
        btn.innerHTML = times + 's后重新发送'
        setTimeout(send, 1000)
        if (times == what_time) {
            alert("验证码：" + random_sz)
            btn.removeAttribute('disabled')
            btn.innerHTML = "重新发送"
            times = 1
        }
    }

}
//验证手机号格式
var arr = document.getElementsByTagName('input')
var mobileReg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/

function mobile_test() {
    var mobile_obj = arr[0].value
    if (mobileReg.test(mobile_obj) == false) {
        arr[0].nextElementSibling.innerHTML = "手机号格式不正确"
        arr[0].nextElementSibling.style.color = "red"
    } else {
        arr[0].nextElementSibling.innerHTML = "手机号正确"
        arr[0].nextElementSibling.style.color = "green"
    }
    arr[0].onfocus = function () {
        arr[0].nextElementSibling.innerHTML = ""
    }

}
//验证验证码

console.log(random_sz);

function code_test() {
    var security_code = arr[1].value
    if (security_code == random_sz) {
        arr[1].nextElementSibling.nextElementSibling.innerHTML = "验证码正确"
    } else {
        arr[1].nextElementSibling.nextElementSibling.innerHTML = "验证码不正确"
    }
}

//验证密码
arr[2].nextElementSibling.innerHTML = "密码由6-12位数字、字母、下划线组成"
var pwdReg = /^[\w]{6,12}$/
var pwd_obj = arr[2].value

function pwd_test() {
    console.log(arr[2].value);
    var pwd_obj = arr[2].value
    console.log(pwd_obj);


    if (pwdReg.test(pwd_obj) == false) {
        arr[2].nextElementSibling.innerHTML = "密码由6-12位数字、字母、下划线组成"
        arr[2].nextElementSibling.style.color = "red"
    } else {
        arr[2].nextElementSibling.innerHTML = "密码格式正确"
        arr[2].nextElementSibling.style.color = "green"
    }
    arr[2].onfocus = function () {
        arr[2].nextElementSibling.innerHTML = ""
    }
}
//验证重复密码
function repwd_test() {
    var repwd_obj = arr[3].value
    var pwd_obj = arr[2].value
    if (repwd_obj == '') {
        arr[3].nextElementSibling.innerHTML = ""
    }
    if (repwd_obj != pwd_obj) {
        arr[3].nextElementSibling.innerHTML = "两次密码不一致"
        arr[3].nextElementSibling.style.color = "red"
    } else {
        arr[3].nextElementSibling.innerHTML = "密码一致"
        arr[3].nextElementSibling.style.color = "green"
    }
    if (repwd_obj == '') {
        arr[3].nextElementSibling.innerHTML = ""
    }
    arr[3].onfocus = function () {
        arr[3].nextElementSibling.innerHTML = ""
    }

}
//查看密码
arr[2].nextElementSibling.onmouseover = function () {
    arr[2].type = "text"
    arr[3].type = "text"
}
arr[2].nextElementSibling.onmouseout = function () {
    arr[2].type = "password"
    arr[3].type = "password"
}




document.getElementById("goload").onsubmit= function () { 
    var isOk = true;
    if (!mobile_test()) isOk = false;
    if (!code_test()) isOk = false
    if (!pwd_test()) isOk = false;
    if (!repwd_test()) isOK = false
    return isOk
}

