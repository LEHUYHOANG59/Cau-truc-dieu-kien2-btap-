const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const handle = slider.querySelector('.slider-handle');

    handle.addEventListener('mousedown', (e) => {
        const startX = e.clientX;
        const sliderLeft = slider.getBoundingClientRect().left;
        const handleWidth = handle.offsetWidth;

        const onMouseMove = (e) => {
            const x = e.clientX - sliderLeft;
            let newLeft = x - handleWidth / 2;

            if (newLeft < 0) {
                newLeft = 0;
            } else if (newLeft > slider.offsetWidth - handleWidth) {
                newLeft = slider.offsetWidth - handleWidth;
            }

            handle.style.left = newLeft + 'px';

            // Update other sliders based on the position of the moved slider
            updateOtherSliders(slider);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

function updateOtherSliders(movedSlider) {
    // Implement logic to update the positions of other sliders based on the moved slider
    // For example, if "Good" is moved to the right, "Cheap" and "Fast" might move to the left
    // You can use conditional statements and calculations to achieve the desired behavior
}