
let moneyTotal = 0;
    

function cardClick() {
    const pro =  getProductId('cardname');
    const sendProductName = document.getElementById('cardtitle');
    const count = sendProductName.childElementCount;
    const p = document.createElement('p');
    p.classList.add('font-bold')
    p.innerHTML=`${count+1}.${pro}`
    sendProductName.appendChild(p);

    const getprice = getMoney("price1");
    const getpriceNumber = parseFloat(getprice);
    const storeMoney = document.getElementById('totalprice');
    moneyTotal = parseFloat(moneyTotal) + getpriceNumber;
    storeMoney.innerText= moneyTotal.toFixed(2);

    const grandTotal = document.getElementById("GrandTotal");
       grandTotal.innerText=moneyTotal.toFixed(2);
       
    let btn = document.getElementById("btnApply");
    if (moneyTotal <= 200) {
       btn.disabled = true;
    }
    else  {
      btn.disabled = false;
    }

    let btnParch = document.getElementById('makeparch');
    if (moneyTotal === 0) {
        btnParch.disabled = true;
        
    }
    else{
       btnParch.disabled=false;
    }


}

function cardClick2() {
    const pro2 =  getProductId('cardname2');
    console.log(pro2);
    const sendProductName2 = document.getElementById('cardtitle');
    const count2 = sendProductName2.childElementCount;
    const p2 = document.createElement('p');
    p2.classList.add('font-bold')
    p2.innerHTML=`${count2+1}.${pro2}`
    sendProductName2.appendChild(p2);

    const getprice = getMoney("price2");
    const getpriceNumber = parseFloat(getprice);
    const storeMoney = document.getElementById('totalprice');
    moneyTotal = parseFloat(moneyTotal) + getpriceNumber;
    storeMoney.innerText= moneyTotal.toFixed(2);

    const grandTotal = document.getElementById("GrandTotal");
       grandTotal.innerText=moneyTotal.toFixed(2);

    let btn = document.getElementById("btnApply");
    if (moneyTotal <= 200) {
       btn.disabled = true;
    }
    else  {
      btn.disabled = false;
    }

    let btnParch = document.getElementById('makeparch');
    if (moneyTotal === 0) {
        btnParch.disabled = true;
        
    }
    else{
       btnParch.disabled=false;
    }
    
}
function cardClick3() {
    const pro3 =  getProductId('cardname3');
    console.log(pro3);
    const sendProductName3 = document.getElementById('cardtitle');
    const count3 = sendProductName3.childElementCount;
    const p3 = document.createElement('p');
    p3.classList.add('font-bold')
    p3.innerHTML=`${count3+1}.${pro3}`
    sendProductName3.appendChild(p3);
    
    const getprice = getMoney("price3");
    const getpriceNumber = parseFloat(getprice);
    const storeMoney = document.getElementById('totalprice');
    moneyTotal = parseFloat(moneyTotal) + getpriceNumber;
    storeMoney.innerText= moneyTotal.toFixed(2);

    const grandTotal = document.getElementById("GrandTotal");
       grandTotal.innerText=moneyTotal.toFixed(2);


    let btn = document.getElementById("btnApply");
    if (moneyTotal <= 200) {
       btn.disabled = true;
    }
    else  {
      btn.disabled = false;
    }

    let btnParch = document.getElementById('makeparch');
    if (moneyTotal === 0) {
        btnParch.disabled = true;
        
    }
    else{
       btnParch.disabled=false;
    }
}



function btnCpn(){
    const addCoupon = couponCode('coupon');
   
    
    if (addCoupon === "SELL200") {
       const discount = moneyTotal * 20/100;
       const discountId = document.getElementById("discount");
       discountId.innerText = discount.toFixed(2);

       const afterDiscount = moneyTotal - discount;
       const grandTotal = document.getElementById("GrandTotal");
       grandTotal.innerText=afterDiscount.toFixed(2);

      
        
    }else{
       alert("Invalid coupon code");
    }
}

document.getElementById('gohome').addEventListener('click',function () {
    window.location.href = "index.html";

})

