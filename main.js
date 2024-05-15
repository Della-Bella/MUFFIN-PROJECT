
//adding star reviews
let stars = document.getElementsByClassName("star");
let selectedStars = [];

function updateRating(n) {
  // Reset previously selected stars
  for (let i = 0; i < selectedStars.length; i++) {
    stars[selectedStars[i]].classList.remove("checked");
  }
  selectedStars = [];

  // Update the selected stars
  for (let i = 0; i < n; i++) {
    stars[i].classList.add("checked");
    selectedStars.push(i);
  }
}

//increase and decrease quantities in quantity field
function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;
    if(limit && value >= limit) return;
    numberInput.innerHTML = value+1;
  }
  
  function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if(isNaN(value)) value = 0;  
    if(value < 2) return;
    numberInput.innerHTML = value-1;
  }

//add to cart button and message confirming item added
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addToCart").addEventListener("click", function() {
        alert("This item has been added to the cart");
    });
});

//tabs
function openItem(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }

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

/*carousel
/document.addEventListener("DOMContentLoaded", function() {
    const prev = document.getElementById('prevButton')
    const next = document.getElementById('nextButton')
    const list = document.getElementById('carouselItemList')
    const itemWidth = 150
    const padding = 10
    prev.addEventListener('click',()=>{
        list.scrollLeft -= itemWidth + padding
    })
*/
    