const animation_elements = document.querySelectorAll('.divisions');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
        else{
            entry.target.classList.remove('animate');
        }
    })
}, {
    threshold:0.2
});

for(let i = 0; i < animation_elements.length; i++){
    const el = animation_elements[i];
    observer.observe(el);
}


const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const body = document.body;

menuButton.addEventListener('click', function() {
    sidebar.classList.toggle('open'); 
});

body.addEventListener('click', function(event) {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
      sidebar.classList.remove('open'); 
    }
  });

 
  sidebar.addEventListener('click', function(event) {
    event.stopPropagation(); 

});
  
  