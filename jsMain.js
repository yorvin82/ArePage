const modal1 = document.getElementById("modal1");
const fullimg = document.getElementById("fullimg");

function openmodal(reference){
  modal1.style.display="flex";
  fullimg.src = reference
}

function closemodal(){
    modal1.style.display="none";
    
  }
