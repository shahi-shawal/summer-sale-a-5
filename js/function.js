function getMoney(moneyId) {
    const money=document.getElementById(moneyId);
    const moneyStr = money.innerText;
    return moneyStr;
}

function getProductId(productId){
    const pro1= document.getElementById(productId);
    const product = pro1.innerText;
    return product;
}

// coupon code 

function couponCode(inputcoupon){
  const getCoupon = document.getElementById(inputcoupon);
  const getCodeCoupon = getCoupon.value;
  return getCodeCoupon;
}


