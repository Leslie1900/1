// 购物车操作
// 删除操作 
var del = document.getElementsByClassName('del_btn')
var shop = document.querySelector(".shop")
var no_shop = document.querySelector('.noshop')

function del_onload() {
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            this.parentElement.parentElement.parentElement.parentElement.remove()
            //   改变空购物车的显示界面
            if (del.length == 0) {
                shop.style.display = "none"
                no_shop.style.display = "block"
            } else {
                shop.style.display = "block"
                no_shop.style.display = "none"
            }
            updata_sum_price()
        }
    }
}
del_onload()


// 购物车加减操作
var minus_btn = document.getElementsByClassName('minus_btn')
var add_btn = document.getElementsByClassName('add_btn')
var amount = document.getElementsByClassName('shop_count')
var price = document.getElementsByClassName('price')  //小计
var total_price=document.querySelector(".cart_sum")
var deal_btn=document.querySelector('.cart_deal_btn')

function add_minus() {
    //单价
    // 减操作
    for (let i = 0; i < minus_btn.length; i++) {
        minus_btn[i].onclick = function () {
            //单价计算
            let unit_price = parseFloat(price[i].innerHTML.substring(1)) / amount[i].value

            if (amount[i].value == 1) {
                this.setAttribute('disabled', 'disabled')
            } else {
                amount[i].value--
            }
            price[i].innerHTML = '￥' + unit_price * amount[i].value
            updata_sum_price()
        }

    }
    // 加操作
    for (let j = 0; j < add_btn.length; j++) {
        //单价计算
        let unit_price = parseFloat(price[j].innerHTML.substring(1)) / amount[j].value

        add_btn[j].onclick = function () {
            amount[j].value++
            price[j].innerHTML = "￥" + unit_price * amount[j].value
            updata_sum_price()
        }

    }
}
add_minus()

// 直接输入产品个数计算小计和总价
function value_sum(){
    for(let i=0;i<amount.length;i++){
        let unit_price = parseFloat(price[i].innerHTML.substring(1)) / amount[i].value
        amount[i].onblur=function(){
            let value=amount[i].value
            if(value<=0){                       
                this.value=1
            }
            price[i].innerHTML = '￥' + unit_price *this.value
            updata_sum_price()
        }
    }
}
value_sum()
// 计算总价
function updata_sum_price(){
    let sum=0;
    for(let i=0;i<price.length;i++){
        sum+=parseFloat(price[i].innerHTML.substring(1))
    }
    total_price.innerHTML="￥"+sum
    total_price.style.color="red"
}
updata_sum_price()

// 立即结算
deal_btn.onclick=function(){
    setTimeout(() => {
       if(confirm("您的订单总价为:"+total_price.innerHTML+"\n是否确定支付")){
           alert("支付成功")
           shop.style.display = "none"
           no_shop.style.display = "block"
       }
    }, 2000);
}





// 轮播图
var b_banner = document.getElementsByClassName("banner")[0]
var b_img = document.getElementById("banner_img")
var b_btn = document.getElementsByClassName("banner_btn")
var b_img_src = ['../images/ban1.jpg', '../images/ban2.jpg', '../images/ban3.png', '../images/ban4.jpg',]
var b_flag = false
var count = 0

setInterval(function () {
    if (b_flag) {
        return
    };
    b_img.setAttribute("src", b_img_src[count]);
    for (var i = 0; i < b_btn.length; i++) {
        b_btn[i].style.backgroundColor = "#ACA8A7";
        b_btn[i].style.color = "#050505"
    }
    b_btn[count].style.backgroundColor = "#9E2825";
    b_btn[count].style.color = "#ffffff"
    if (count == 3) {
        count = 0
    } else {
        count++
    }
}, 1500)
b_banner.onmouseover = function () {
    b_flag = true
}
b_banner.onmouseout = function () {
    b_flag = false
}

// 轮播图中小圆点按钮指定图片
for (let i = 0; i < b_btn.length; i++) {

    b_btn[i].onclick = function () {
        count = i
        b_img.setAttribute("src", b_img_src[count])
        for (var j = 0; j < b_btn.length; j++) {
            b_btn[j].style.backgroundColor = "#ACA8A7";
            b_btn[j].style.color = "#050505"
        }
        b_btn[count].style.backgroundColor = "#9E2825";
        b_btn[count].style.color = "#ffffff"
    }
}
// 轮播左右按钮
var prev_btn = document.getElementsByClassName('op_prev')[0]
var next_btn = document.getElementsByClassName("op_next")[0]
prev_btn.onclick = function () {
    if (count == 0) {
        count = 3
    } else {
        count--
    }
    b_img.setAttribute("src", b_img_src[count]);
    for (var i = 0; i < b_btn.length; i++) {
        b_btn[i].style.backgroundColor = "#ACA8A7";
        b_btn[i].style.color = "#050505"
    }
    b_btn[count].style.backgroundColor = "#9E2825";
    b_btn[count].style.color = "#ffffff"
}

next_btn.onclick = function () {
    if (count == 3) {
        count = 0
    } else {
        count++
    }
    b_img.setAttribute("src", b_img_src[count]);
    for (var i = 0; i < b_btn.length; i++) {
        b_btn[i].style.backgroundColor = "#ACA8A7";
        b_btn[i].style.color = "#050505"
    }
    b_btn[count].style.backgroundColor = "#9E2825";
    b_btn[count].style.color = "#ffffff"
}

// 资讯滚动
var scroll_obj = document.getElementById("scroll_ct")
var move = 0
var s_flag = false

setInterval(function () {
    if (s_flag) {
        return
    }
    move--
    scroll_obj.firstElementChild.style.marginTop = move + 'px'
    if (-move > scroll_obj.firstElementChild.offsetHeight) {
        move = 0
        scroll_obj.firstElementChild.style.marginTop = "0px";
        scroll_obj.appendChild(scroll_obj.firstElementChild);
    }
}, 50)

scroll_obj.onmousemove = function () {
    s_flag = true
    return
}
scroll_obj.onmouseout = function () {
    s_flag = false
    return
}