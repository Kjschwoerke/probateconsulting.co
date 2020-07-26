const returnHome = document.getElementById('returnTop')
let position

window.addEventListener('scroll', function() { 
    position = window.scrollY;
        if(position >= 800){
            returnHome.classList.add('returnTop-show') 
        } else if (position <= 799) {
            returnHome.classList.remove('returnTop-show')
        }
})

