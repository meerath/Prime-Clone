function loadCoupon(){
    document.querySelector('.coupon-container').style.display="block";
     document.getElementById('navbar').style.opacity="0.5";
      document.getElementById('carouselExampleCaptions').style.opacity="0.5";
      
       document.getElementById('cw').style.opacity="0.5";
        document.getElementById('cwi').style.opacity="0.5";
        document.getElementById('thr').style.opacity="0.5";
        document.getElementById('thri').style.opacity="0.5";
        document.getElementsByName('body').style.overflow='hidden'
}

const closeCoupon = () => {
    document.querySelector('.coupon-container').style.display="none";
    document.body.style.opacity="1";
    document.getElementById('navbar').style.opacity="1"
     document.getElementById('carouselExampleCaptions').style.opacity="1";
     document.getElementById('cw').style.opacity="1";
     document.getElementById('cwi').style.opacity="1";
     document.getElementById('thr').style.opacity="1";
     document.getElementById('thri').style.opacity="1";
     document.getElementsByName('body').style.overflow='auto'
}


           