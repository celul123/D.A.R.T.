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

function toggleAnswer(questionDiv) {
    const totalDiv = questionDiv.closest('.total'); 
    const answer = totalDiv.querySelector('.answer'); 
    const chevron = questionDiv.querySelector("img[data-chevron]");

    if (answer.classList.contains("open")) {
        answer.classList.remove("open"); 
        chevron.style.transform = "rotate(0deg)";
    } else {
        answer.classList.add("open"); 
        chevron.style.transform = "rotate(180deg)";
    }

}

