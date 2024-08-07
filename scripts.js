// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show-nav');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('nav ul').classList.remove('show-nav');
        });
    });

    // Handle review form submission
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.querySelector('.reviews-container');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;

        // Create new review element
        const newReview = document.createElement('div');
        newReview.classList.add('review');

        const reviewTitle = document.createElement('h3');
        reviewTitle.textContent = name;

        const reviewContent = document.createElement('p');
        reviewContent.textContent = reviewText;

        newReview.appendChild(reviewTitle);
        newReview.appendChild(reviewContent);

        // Add the new review to the reviews container
        reviewsContainer.appendChild(newReview);

        // Clear form inputs
        reviewForm.reset();
    });
});
