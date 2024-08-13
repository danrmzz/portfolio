function showExperience(id) {
    // Hide all experience details
    var details = document.getElementsByClassName('experience-detail');
    for (var i = 0; i < details.length; i++) {
        details[i].classList.remove('active');
    }

    // Remove active class from all navbar items
    var items = document.getElementsByClassName('navbar-item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }

    // Show the selected experience detail
    document.getElementById(id).classList.add('active');

    // Add active class to the clicked navbar item
    event.target.classList.add('active');
}

// Initialize: Show the first experience by default
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('selfbook').classList.add('active');
    document.querySelector('.navbar-item').classList.add('active');
});
