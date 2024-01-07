document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function () {
      // Show the button when scrolling down
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      // Scroll to the top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  

function showSidebar() {
    const sidebar = document.querySelector('.nav__navigation--flexed')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.nav__navigation--flexed')
    sidebar.style.display = 'none'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const animElement1 = document.querySelectorAll('.op')
animElement1.forEach((el) => observer.observe(el))

const animElement2 = document.querySelectorAll('.op-d')
animElement2.forEach((el) => observer.observe(el))

$(document).ready(function() {

    function animateNumbers() {
        $('.hero__text--statistic h2').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    animateNumbers();
});