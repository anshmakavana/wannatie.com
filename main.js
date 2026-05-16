const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const sidebar = document.querySelector('.sidebar')

function activeSidebar(e){
    sidebar.classList.remove('hidden');
    menuIcon.classList.add('none');
    closeIcon.classList.remove('none');
}

menuIcon.addEventListener('click', activeSidebar);

function closeSidebar(e) {
    sidebar.classList.add('hidden');
    menuIcon.classList.remove('none');
    closeIcon.classList.add('none');
}

closeIcon.addEventListener('click', closeSidebar);

const sidebarLinks = document.querySelector('.sidebar-links');

sidebarLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        closeSidebar(e);
    }
});

const goToTop = document.querySelector('.go-to-top');

goToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})