
const closeButton =document.querySelector('.closeButton');
const closeButtonc =document.querySelector('.closeButtonC');
const closeButtonP =document.querySelector('.closeButtonP');
const popupinfo = document.querySelector('.popupinfo');
const info = document.querySelector('.info')
const index = document.querySelector('.index')
const contact = document.querySelector('.contact')
const projets = document.querySelector('.projets')
const popupcontact = document.querySelector('.popupcontact')
const popupprojet = document.querySelector('.popupprojet')
const closee = document.querySelector('.close')




info.addEventListener('click', ()=>{
   

    popupinfo.classList.remove('none')
    popupinfo.classList.toggle('index')
    popupcontact.classList.toggle('index')

    

})
contact.addEventListener('click', ()=>{
    popupcontact.classList.toggle('none')
    popupcontact.classList.add('index')
    popupinfo.classList.toggle('index')
})
projets.addEventListener('click', ()=>{
    popupprojet.classList.toggle('none')

})


closeButton.addEventListener('click',()=>{
    popupinfo.classList.toggle('none')
    
})
closeButtonc.addEventListener('click',()=>{
    popupcontact.classList.toggle('none')
    
})
closeButtonP.addEventListener('click',()=>{
    popupprojet.classList.toggle('none')
    
})
closee.addEventListener('click',()=>{
    function close_window() {
        if (confirm("Close Window?")) {
          close();
        }
      }
    close_window();
    
})


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    +h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
   
  startTime();

  date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;









