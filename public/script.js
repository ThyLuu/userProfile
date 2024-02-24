const sidebar = document.getElementById('sidebar')
const toggleSidebar = document.querySelector('.toggle-sidebar')

toggleSidebar.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar-collapse')
})