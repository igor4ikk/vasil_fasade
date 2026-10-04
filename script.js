// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  
  // Trigger once on load
  revealOnScroll();

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '1rem 0';
      header.style.background = 'rgba(15, 17, 21, 0.9)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.padding = '1.5rem 0';
      header.style.background = 'rgba(26, 29, 36, 0.7)';
      header.style.boxShadow = 'none';
    }
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        
        if (img) {
          lightbox.style.display = 'flex';
          // Small delay for smooth opacity transition
          setTimeout(() => {
            lightbox.classList.add('active');
          }, 10);
          
          lightboxImg.src = img.src;
          if (overlay) {
            lightboxCaption.textContent = overlay.textContent;
          } else {
            lightboxCaption.textContent = '';
          }
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 300); // match transition duration
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
      }
    });
  }
});
