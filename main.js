const up = document.querySelector(".up");
console.log(up)

up.addEventListener("click", () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
})