// 取得全部圖片 & 購物車
const pdItems = $(".pdItem img");
const cart = $(".cart");
const pdBtns = $(".pdItem .cartBtn");
console.log(pdBtns);

// 對每個商品做點擊事件
pdItems.click(function(e) {
  // 避免 <a> 標籤跳轉頁面
  e.preventDefault();
  // 取得商品的寬、高、X、Y 座標
  const pdW = $(this).width();
  const pdH = $(this).height();
  const pdO = $(this).offset();
  const pdL = pdO.left;
  // 此處取的的高為頁面頂端到商品的高
  // 所以原本高要減掉捲軸卷下來的高度
  // 才是頁面上看到商品的高度
  const pdT = pdO.top - window.scrollY;
  const pdSrc = $(this).attr("src");

  // 取得購物車的寬、高、X、Y 座標
  const cartW = cart.width();
  const cartH = cart.height();
  const cartO = cart.offset();
  const cartL = cartO.left;
  const cartT = cartO.top - window.scrollY;

  // 加一 element 在隨便一 parent，但 position 要設為 fixed
  const itemAnima = `<img 
        class="itemAnima"
        src="${pdSrc}"
        width="${pdW}" 
        height="${pdH}"
        style="
            position: fixed; 
            top: ${pdT}px; 
            left: ${pdL}px; 
            transition: 1s; 
            opacity: 0.6;"
         >`;
  $(".itemContainer").append(itemAnima);

  setTimeout(function() {
    $(".itemAnima").css({
      width: `${cartW}px`,
      height: `${cartH}px`,
      top: `${cartT}px`,
      left: `${cartL}px`
    });
  }, 100);
  setTimeout(function() {
    $(".itemAnima").remove();
  }, 1100);
});
