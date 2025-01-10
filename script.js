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
