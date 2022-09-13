 
 const changeMode=()=>{
        document.getElementsByTagName('nav')[0].classList.toggle('navbg2')

        document.getElementsByClassName("search-box")[0].classList.toggle('searchbg2')
        
        document.querySelectorAll('.dark-video').forEach(element => {
            element.setAttribute('fill', element.attributes.fill.value == "#232f3e" ? "#f5f5f5" : "#232f3e")
        });

         document.querySelectorAll('.clr').forEach(element => {
            element.classList.toggle('dark')
        });

        document.getElementsByTagName('body')[0].classList.toggle('dark')
     }

     





