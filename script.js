$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function (e) {
        // Prevent the default anchor behavior
        e.preventDefault();

        // Get the target section
        var target = this.hash;
        var $target = $(target);

        // Animate scrolling to the target section
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 800, function () {
            // Optionally add the hash to the URL after scroll
            window.location.hash = target;
        });
    });
});
$(document).ready(function () {
    function animateGreeting() {
        $('#greeting').css('width', '0'); // Reset width to 0
        $('#greeting').animate({ width: '100%' }, 5000, 'linear', function () {
            animateGreeting(); // Call the function again after animation ends
        });
    }
    
    animateGreeting(); // Start the animation when the page loads
});

