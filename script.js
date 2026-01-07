//magnifier ki coding 

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('zoom-image');
    const magnifier = document.getElementById('magnifier');
    const heroImage = document.querySelector('.hero-image');
    
    // Show magnifier on mouse enter
    heroImage.addEventListener('mouseenter', function() {
        magnifier.style.opacity = '1';
        magnifier.classList.add('active');
    });
    
    // Hide magnifier on mouse leave
    heroImage.addEventListener('mouseleave', function() {
        magnifier.style.opacity = '0';
        magnifier.classList.remove('active');
        image.style.transform = 'scale(1)';
    });
    
    // Move magnifier with mouse
    heroImage.addEventListener('mousemove', function(e) {
        if (!magnifier.classList.contains('active')) return;
        
        const rect = heroImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Position magnifier centered on cursor
        magnifier.style.left = (x - 75) + 'px';
        magnifier.style.top = (y - 75) + 'px';
        
        // Calculate background position for zoom effect
        const bgX = (x / image.width) * 100;
        const bgY = (y / image.height) * 100;
        
        // Set magnifier background position
        magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
        
        // Optional: Slight zoom effect on main image
        image.style.transform = 'scale(1.02)';
    });
});




//  Mobile Menu Toggle 
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');
}

//  Counter Animation 
const counters = document.querySelectorAll('.counter');

const runCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Speed control (500/target) jitna bara target utna chota increment
            const increment = target / 500; 

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1); // Har 1ms baad update
            } else {
                counter.innerText = target;
            }
        };
        
        // Agar counter screen par nazar aa raha ho tabhi shuru ho 
        updateCount();
    });
}

// Jab page load ho tab run krny ky liye
runCounter();

// Download CV Button 
document.getElementById('download-cv-btn').addEventListener('click', function() {

    const fileUrl = 'portfolios/Samra Amir CV.pdf'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Samra_Amir_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert("Your CV is Downloaded, Location Download Folder...");
});

//  FAQ Accordion 
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});