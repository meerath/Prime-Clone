function loadCoupon(){
    document.getElementById('coupon').style.display="block";
     document.getElementById('navbar').style.opacity="0.5";
      document.getElementById('carouselExampleCaptions').style.opacity="0.5";
      
       document.getElementById('cw').style.opacity="0.5";
        document.getElementById('cwi').style.opacity="0.5";
        document.getElementById('thr').style.opacity="0.5";
        document.getElementById('thri').style.opacity="0.5";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.body.style.opacity="1";
    document.getElementById('navbar').style.opacity="1"
     document.getElementById('carouselExampleCaptions').style.opacity="1";
     document.getElementById('cw').style.opacity="1";
     document.getElementById('cwi').style.opacity="1";
     document.getElementById('thr').style.opacity="1";
     document.getElementById('thri').style.opacity="1";
}
  const changeMode=()=>{
                let mybody = document.body;
                mybody.classList.toggle('mydark')
            }

           