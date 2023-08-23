
let total =0;
function cardClick(target) {
const itemName = target.parentNode.childNodes[3].childNodes[3].innerText;
const cardName = document.getElementById('cardtitle');
const p = document.createElement('h2');
const count = cardName.childElementCount;
p.classList.add('font-semibold')
p.innerHTML =  `${count+1}.${itemName}`;
cardName.appendChild(p)

const grandTotal = document.getElementById('GrandTotal');
const itemMoney = target.parentNode.childNodes[3].childNodes[4].innerText;
const getMoney = document.getElementById('totalprice');
const getMoneyNumber = parseFloat(itemMoney);
total = parseFloat(total) + getMoneyNumber;
getMoney.innerText=total.toFixed(2);
grandTotal.innerText = total.toFixed(2);

// disable btn 
const btnapply = document.getElementById('btnApply');

if (total <=200) {
    btnapply.disabled = true;
}
else{
    btnapply.disabled = false;
}

const btnparch = document.getElementById('makeparch');

if (total === 0) {
    btnparch.disabled = true;
}
else{
    btnparch.disabled = false;
}
}

function btnCpn() {
    const couponCode = document.getElementById('coupon');
   const couponValue = couponCode.value;
    if (couponValue === "SELL200") {
        const discount = total * 20 /100;
        const discountId = document.getElementById('discount');
        discountId.innerText = discount.toFixed(2);
        const grandTotal = document.getElementById('GrandTotal');
        const totalPrice = total - discount;
        grandTotal.innerText = totalPrice.toFixed(2);

    }
    else{
        alert("Invalid Coupon Code")
    }
}



// let total = 0
// function cardClick(target) {
//     const itemName = target.childNodes[3].childNodes[3].innerText;
//     console.log(itemName);
    // for (const item of itemName) {
    //     const itemPro = item.childNodes[3];
    //     const itempro1 = itemPro.childNodes
    //     console.log(itemPro1);
    // }
    // const cardName = document.getElementById('cardtitle');
    // const count = cardName.childElementCount;
    // const p = document.createElement('h2');
    // p.innerHTML = `${count+1}.${itemName}`;
    // cardName.appendChild(p);

    // const Money = target.parentNode.childNodes[1].childNodes[3].childNodes[4].innerText;
    // const MoneyNumber = parseFloat(Money)
    // const getMoney = document.getElementById('totalprice');
    // total = parseFloat(total) + MoneyNumber;
    // getMoney.innerText=total.toFixed(2);
    
    // const btnapply = document.getElementById('btnApply')
    // if (total <= 200) {
    //     btnapply.disabled = true;
    // }
    // else{
    //     btnapply.disabled = false;
    // }

    // const btnparch =document.getElementById('makeparch');

    // if (total === 0) {
    //     btnparch.disabled = true;
    // }
    // else{
    //     btnparch.disabled = false;
    // }
