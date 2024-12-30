const animationElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            } else {
                entry.target.classList.remove('animate'); // Optional: Remove animation if you want
            }
        });
    },
    {
        threshold: 0.1 // Adjust as needed (0.1 means 10% visibility triggers the animation)
    }
);

// Observe each element
animationElements.forEach((el) => {
    observer.observe(el);
});


// Function to toggle the answer visibility when the icon is clicked
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Find the answer section associated with the clicked button
        const faqItem = button.closest('.faq-item'); // Get the parent FAQ item
        const answer = faqItem.querySelector('.answer'); // Get the answer section within the item

        if (faqItem.classList.contains('active')) {
            // Close the answer with smooth transition
            answer.style.height = `${answer.scrollHeight}px`; // Set current height for animation
            setTimeout(() => {
                answer.style.height = '0'; // Shrink to 0 height
            }, 10); // Delay for smoother transition start
            faqItem.classList.remove('active'); // Remove active state after transition
        } else {
            // Open the answer with smooth transition
            faqItem.classList.add('active'); // Add active state
            answer.style.height = `${answer.scrollHeight}px`; // Expand to full content height
            setTimeout(() => {
                answer.style.height = 'auto'; // Reset height to auto for flexibility
            }, 300); 
        }
    });
});

const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const overlay = document.getElementById("overlay");

menuButton.addEventListener('click', function() {
    overlay.classList.toggle("visible");
    sidebar.classList.toggle('open'); 
});

body.addEventListener('click', function(event) {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      overlay.classList.remove("visible");
      sidebar.classList.remove('open'); 
    }
    
  });

 
  sidebar.addEventListener('click', function(event) {
    event.stopPropagation(); 

});

