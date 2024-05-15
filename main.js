//carousel
document.addEventListener("DOMContentLoaded", function() {
    const prev = document.getElementById('prevButton')
    const next = document.getElementById('nextButton')
    const list = document.getElementById('carouselItemList')
    const itemWidth = 150
    const padding = 10
    prev.addEventListener('click',()=>{
        list.scrollLeft -= itemWidth + padding
    })
    next.addEventListener('click',()=>{
        list.scrollLeft += itemWidth + padding
    })
});