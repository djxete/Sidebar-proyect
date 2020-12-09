//============= VARIABLES ========
 const btn = document.querySelector(".sidebar-toggle");
 const btnClose = document.querySelector(".close-btn");
 const sidebar= document.querySelector(".sidebar");
 


 //============= ADD EVENT LISTENERS ========

 btn.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
    pressBtnClose();


 })


 

 //============= ADD EVENT LISTENERS ======== (btnClose)

const pressBtnClose = function(){
    btnClose.addEventListener("click", ()=>{
        if(sidebar.classList.contains("show-sidebar")){
            sidebar.classList.remove("show-sidebar")
        }
    })
}