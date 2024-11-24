/**
* Template Name: Arsha - v4.10.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()


/*
* dark mode
*/
  let Tenabled = false;
  const toggle = document.getElementById("dark-body");
  toggle.addEventListener("click", move);

  function move() {
    if ((Tenabled == true, document.body.classList.contains("dark"))) {
      Tenabled = false;
      document.getElementById("dark-button").style.transitionDuration = "0.3";
      document.getElementById("dark-button").style.left = "25%";
      document.getElementById("dark-button").style.borderColor = "grey";
      document.getElementById("dark-body").style.backgroundColor = "grey";
      document.body.classList.remove("dark");
      document.getElementById("Logo").src = "Assets/Image/Logo/Light-logo.png";
      sessionStorage.setItem("dark", 0);
    } else {
      Tenabled = true;
      document.getElementById("dark-button").style.transitionDuration = "0.3s";
      document.getElementById("dark-button").style.left = "75%";
      document.getElementById("dark-button").style.backgroundColor = "#fff";
      document.getElementById("dark-button").style.borderColor = "#3fbbc0";
      document.getElementById("dark-body").style.backgroundColor = "#3fbbc0";
      document.body.classList.add("dark");
      sessionStorage.setItem("dark", 1);
      document.getElementById("Logo").src = "Assets/Image/Logo/Dark-logo.png";
    }
  }

  window.addEventListener("load", function () {
    if (sessionStorage.getItem("dark") == 1) {
      Tenabled = true;
      document.getElementById("dark-button").style.transitionDuration = "0.3s";
      document.getElementById("dark-button").style.left = "75%";
      document.getElementById("dark-button").style.backgroundColor = "#fff";
      document.getElementById("dark-button").style.borderColor = "#3fbbc0";
      document.getElementById("dark-body").style.backgroundColor = "#3fbbc0";
      document.body.classList.add("dark");
      document.getElementById("Logo").src = "Assets/Image/Logo/Dark-logo.png";
    }
  });


  const borderRound = document.getElementById("round-body");
  borderRound.addEventListener("click", round);

  function round() {
    if (document.body.classList.contains("rounded")) {
      document.getElementById("round-button").style.transitionDuration = "0.3";
      document.getElementById("round-button").style.left = "25%";
      document.getElementById("round-button").style.borderColor = "grey";
      document.getElementById("round-body").style.backgroundColor = "grey";
      document.body.classList.remove("rounded");
    } else {
      document.getElementById("round-button").style.transitionDuration = "0.3s";
      document.getElementById("round-button").style.left = "75%";
      document.getElementById("round-button").style.backgroundColor = "#fff";
      document.getElementById("round-button").style.borderColor = "#3fbbc0";
      document.getElementById("round-body").style.backgroundColor = "#3fbbc0";
      document.body.classList.add("rounded");
    }
  }
  

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;


  const scrolling = document.getElementById("scroll-body");
  scrolling.addEventListener("click", scrollbar);

  function scrollbar() {
    if (document.getElementById("progress").classList.contains("scroll")) {
      document.getElementById("scroll-button").style.transitionDuration = "0.3";
      document.getElementById("scroll-button").style.left = "25%";
      document.getElementById("scroll-button").style.borderColor = "grey";
      document.getElementById("scroll-body").style.backgroundColor = "grey";
      document.getElementById("progress").classList.remove("scroll");
    } else {
      document.getElementById("scroll-button").style.transitionDuration = "0.3s";
      document.getElementById("scroll-button").style.left = "75%";
      document.getElementById("scroll-button").style.backgroundColor = "#fff";
      document.getElementById("scroll-button").style.borderColor = "#3fbbc0";
      document.getElementById("scroll-body").style.backgroundColor = "#3fbbc0";
      document.getElementById("progress").classList.add("scroll");
    }
  }


  const carouselText = [
    {text: "ვებ-გვერდზე არსებული ინფორმაცია დამუშავებულია, ქ. თბილისის 99-ე საჯარო სკოლის 10ბ კლასის მიერ. ვებ-გვერდი არის ინფორმაციული ტიპის, რომელიც მოგვითხობს (ადამიანების და ტექნოლოგიების ურთიერთობის) შესახებ.", color: "#fff"},
  ]
  
  $( document ).ready(async function() {
    carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 65) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs();
        await deleteSentence(eleRef);
        await waitForMs(5000);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



    // Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
 