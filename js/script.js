window.addEventListener("DOMContentLoaded", () => {
  fetch("global.html")
    .then(res => res.text())
    .then(data => {
      const temp = document.createElement("div");
      temp.innerHTML = data;

      const header = temp.querySelector("#header-template").content.cloneNode(true);
      const footer = temp.querySelector("#footer-template").content.cloneNode(true);

      document.getElementById("global-header").appendChild(header);
      document.getElementById("global-footer").appendChild(footer);

      const current = window.location.pathname.split("/").pop();
      document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === current) {
          link.classList.add("active");
        }
      });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const heroHeader = document.querySelector('.hero-header h1');
  if (heroHeader) {
    setTimeout(() => {
      heroHeader.classList.add('animate');
    }, 500);
  }
});

// HOME
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  const subtitle = document.querySelector('.subtitle');
  const intro = document.querySelector('.intro');
  const ctaButton = document.querySelector('.cta-button');

  setTimeout(() => {
    heroTitle.style.animation = 'fadeInUp 1s ease forwards';
  }, 300);

  setTimeout(() => {
    subtitle.style.animation = 'fadeInUp 1s ease forwards';
  }, 800);

  setTimeout(() => {
    intro.style.animation = 'fadeInUp 1s ease forwards';
  }, 1300);

  setTimeout(() => {
    ctaButton.style.animation = 'fadeInUp 1s ease forwards';
  }, 1800);

  const slides = document.querySelectorAll('.destination-slide');
  const dots = document.querySelectorAll('.destination-dots .dot');
  let currentSlide = 0;
  let slideInterval;

  function initCarousel() {
    showSlide(0);
    startSlideshow();
    
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
        resetSlideshow();
      });
    });
  }

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }

  function startSlideshow() {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  }

  function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
  }

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  initCarousel();
});

// DESTINATIONS
document.addEventListener('DOMContentLoaded', function() {

  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.getAttribute('data-filter');
      
      filterCards(filterValue);
    });
  });

  function filterCards(category) {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.querySelector('.arrow').style.transform = 'translateX(4px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.querySelector('.arrow').style.transform = 'translateX(0)';
    });
  });
});


// ABOUT US
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  setTimeout(() => {
    heroTitle.style.animation = 'fadeInUp 1s ease forwards';
    setTimeout(() => {
      heroTitle.classList.add('animate');
    }, 800);
  }, 300);

  setTimeout(() => {
    heroSubtitle.style.animation = 'fadeInUp 1s ease forwards';
  }, 800);

  const timelineMilestones = document.querySelectorAll('.timeline-milestone');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.classList.contains('timeline-milestone')) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  timelineMilestones.forEach((milestone, index) => {
    milestone.style.opacity = '0';
    milestone.style.transform = 'translateY(30px)';
    milestone.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(milestone);
  });

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

});

// TRAVEL NOW
document.getElementById("tripForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dep = document.getElementById("departure").value;
  const ret = document.getElementById("return").value;
  const part = parseInt(document.getElementById("participant").value);

  const errorMsg = document.getElementById("error-msg");
  errorMsg.textContent = ""; 
  
// VALIDASI
  if (!name) {
    errorMsg.textContent = "Please fill in the name field.";
    shakeField("fullname");
    return;
  }

  if (!phone) {
    errorMsg.textContent = "Please fill in the phone number field.";
    shakeField("phone");
    return;
  }

  if (!dep) {
    errorMsg.textContent = "Please select the departure date.";
    shakeField("departure");
    return;
  }

  if (!ret) {
    errorMsg.textContent = "Please select the return date.";
    shakeField("return");
    return;
  }

  if (isNaN(part)) {
    errorMsg.textContent = "Please fill in the number of participants field.";
    shakeField("participant");
    return;
  }

  if (phone.length < 8) {
    errorMsg.textContent = "Phone number must be at least 8 digits.";
    shakeField("phone");
    return;
  }

  if (new Date(ret) < new Date(dep)) {
    errorMsg.textContent = "Return date cannot be before departure date.";
    shakeField("return");
    return;
  }

  if (part < 1) {
    errorMsg.textContent = "At least one participant is required.";
    shakeField("participant");
    return;
  }

  if (part > 50) {
    errorMsg.textContent = "Each booking allows a maximum of 50 participants. Please proceed with another batch if needed.";
    shakeField("participant");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
