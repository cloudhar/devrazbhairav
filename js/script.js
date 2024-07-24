document.addEventListener('DOMContentLoaded', function () {
    // JavaScript is not necessary for this basic example as the link navigates to another page.
    // Additional JavaScript functionality can be added if needed.
});

/* gallery */
$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

//Mobile view
function toggleText(button) {
    const hiddenText = button.previousElementSibling.querySelector('.hidden-text');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'inline';
        button.textContent = 'Show Less';
    } else {
        hiddenText.style.display = 'none';
        button.textContent = 'Show More';
    }
}

// Mobile View
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 767) {
        const hiddenTexts = document.querySelectorAll('.hidden-text');
        hiddenTexts.forEach(hiddenText => {
            hiddenText.style.display = 'none';
        });
    }
});
