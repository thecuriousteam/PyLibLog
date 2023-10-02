window.onload = function() {
            showContent('./assets/BeautifulSoup.html');
        }
function showContent(file) {
    fetch(file)
        .then(res => {
            if (!res.ok) {
                throw new Error('new error');
            }
            return res.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Hi error:', error);
        });
}
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
      // Check if the sidebar is active and the screen width is below 768px
}