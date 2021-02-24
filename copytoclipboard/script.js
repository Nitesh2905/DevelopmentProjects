
const copy = document.getElementById('copyBtn');

copy.addEventListener('click', Clicked)

function Clicked(){
    const text = document.getElementById('text');
    copyToClipboard(text.innerText);
}

function copyToClipboard(str){
    const elem = document.createElement('textarea') 

    elem.value = str; 

    document.body.appendChild(elem) //textarea created

    elem.select(); //select the text inside textarea

    elem.setSelectionRange(0, 99999); //for mobile devices

    document.execCommand("copy") //api

    document.body.removeChild(elem) //removing textarea

    alert(`Copied : ${elem.value}`)


}

