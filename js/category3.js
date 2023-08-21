

function cardClick7() {
    const pro3 =  getProductId('cardname7');
    console.log(pro3);
    const sendProductName3 = document.getElementById('cardtitle');
    const count3 = sendProductName3.childElementCount;
    const p3 = document.createElement('p');
    p3.classList.add('font-bold')
    p3.innerHTML=`${count3+1}.${pro3}`
    sendProductName3.appendChild(p3);

    const getprice = getMoney("price7");
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
function cardClick8() {
    const pro3 =  getProductId('cardname8');
    console.log(pro3);
    const sendProductName3 = document.getElementById('cardtitle');
    const count3 = sendProductName3.childElementCount;
    const p3 = document.createElement('p');
    p3.classList.add('font-bold')
    p3.innerHTML=`${count3+1}.${pro3}`
    sendProductName3.appendChild(p3);
    
    const getprice = getMoney("price8");
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
function cardClick9() {
    const pro3 =  getProductId('cardname9');
    console.log(pro3);
    const sendProductName3 = document.getElementById('cardtitle');
    const count3 = sendProductName3.childElementCount;
    const p3 = document.createElement('p');
    p3.classList.add('font-bold')
    p3.innerHTML=`${count3+1}.${pro3}`
    sendProductName3.appendChild(p3);

    const getprice = getMoney("price9");
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