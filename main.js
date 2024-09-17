// Assuming that solarSystem and sun elements are available in the DOM
const solarSystem = document.querySelector('.solar-system');

const fixIt = () => {
    // Temporarily hide and show the solarSystem to reset the layout
    solarSystem.style.display = "none";
    requestAnimationFrame(() => {
        solarSystem.style.display = "";
    });
};

const ro = new ResizeObserver(entries => {
    // Get the height of the sun and the solarSystem element
    const sun = solarSystem.querySelector(".sun");
    if (sun) {
        const sunHeight = sun.getBoundingClientRect().height;
        const solarSystemHeight = solarSystem.getBoundingClientRect().height;

        // If the solar system's height exceeds 10 times the sun's height, fix the layout
        if (solarSystemHeight > 10 * sunHeight) {
            fixIt();
        }
    }
});

// Start observing the solarSystem element for resizing
ro.observe(solarSystem);
