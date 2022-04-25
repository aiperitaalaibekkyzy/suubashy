// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".header_nav ");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  // Do something else, like open/close menu
});


$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  zoom: {
    enabled: true,
    duration: 300 
  },
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
  image: {
    titleSrc: function(item) {
      return item.el.attr('title');
    }
  }
  
})

