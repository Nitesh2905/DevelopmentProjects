
const scrollIndicator = document.getElementById('scrollBar')

const maxHeight =  window.document.body.scrollHeight - window.innerHeight;

function moveScrollBar(e) {
   
    const percentage = ((window.scrollY)/ maxHeight) * 100;
    // console.log(Math.floor(percentage));
    scrollIndicator.style.width = percentage + '%';
}

window.addEventListener('scroll', moveScrollBar);

