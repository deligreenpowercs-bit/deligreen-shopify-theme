document.addEventListener('DOMContentLoaded', function() {
    let checker = document.getElementById('flexi-checker');

    // Check immediately if checker exists
    if (!checker) {
        setTimeout(function() {
            // Check again if checker still doesn't exist
            console.log("Checking for flexi-checker after 10 seconds...");
            checker = document.getElementById('flexi-checker');
            if (!checker) {
                displayBanner();
                console.log("flexi-checker not found. Displaying banner...");
            }
        }, 10000); // 10 seconds
    }

    function displayBanner() {
        var flexiBanner = document.getElementById('flexi-embed-banner');
        if (flexiBanner) {
            flexiBanner.style.display = 'block';
        }
    }
});


const onClickAccordionHeader = e => {
    const parentAccordion = e.currentTarget.closest('.accordion');
    const accordionItems = parentAccordion.querySelectorAll('.accordion-item');

    if (e.currentTarget.parentNode.classList.contains('active')) {
      e.currentTarget.parentNode.classList.remove("active");
    } else {
      Array.prototype.forEach.call(accordionItems, e => e.classList.remove('active'));
      e.currentTarget.parentNode.classList.add("active");
    }
};

const initAccordion = () => {
    const accordionItem = document.querySelectorAll('.accordion-item');
    Array.prototype.forEach.call(accordionItem, e => e.querySelector('.accordion-header').addEventListener('click', onClickAccordionHeader, false));
};

document.addEventListener('DOMContentLoaded', initAccordion);
  

document.addEventListener("DOMContentLoaded", function() {
// Check if the URL contains '#view-product'
if(window.location.hash === '#scroll-point') {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to all links with href '#view-product'
const viewProductLinks = document.querySelectorAll("a[href='#scroll-point']");
viewProductLinks.forEach(function(viewProductLink) {
    viewProductLink.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
});