// simple UI animation

document.querySelectorAll(".service-card").forEach(card => {

card.addEventListener("mouseover", ()=>{

card.style.transform="translateY(-10px)"

})

card.addEventListener("mouseout", ()=>{

card.style.transform="translateY(0)"

})

})

console.log('Prerana Tech Solutions website loaded');