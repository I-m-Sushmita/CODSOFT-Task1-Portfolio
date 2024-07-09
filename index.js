document.getElementById("menu-icon").onclick = function() {
    document.getElementById("sidebar").style.width = "250px";
};

document.getElementById("closebtn").onclick = function() {
    document.getElementById("sidebar").style.width = "0";
};



function filterProjects(filter) {
    const projects = document.querySelectorAll('.projects-box');
    projects.forEach(project => {
        if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
        }
         else {
            project.style.display = 'none';
        }
    });
}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function addAnimationClass() {
    const elements = document.querySelectorAll('.fade-in, .fade-right, .fade-left, .fade-up, .fade-down');
    elements.forEach(element => {
        if (isInViewport(element)) {
            if (element.classList.contains('fade-in')) {
                element.classList.add('animate-fade-in');
            } else if (element.classList.contains('fade-right')) {
                element.classList.add('animate-fade-right');
            } else if (element.classList.contains('fade-left')) {
                element.classList.add('animate-fade-left');
            } else if (element.classList.contains('fade-up')) {
                element.classList.add('animate-fade-up');
            } else if (element.classList.contains('fade-down')) {
                element.classList.add('animate-fade-down');
            } 
        }
    });
}


window.addEventListener('scroll', addAnimationClass);
window.addEventListener('load', addAnimationClass);
