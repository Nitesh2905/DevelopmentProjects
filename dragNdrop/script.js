function allowDrop(e){
e.preventDefault()
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  
  function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }