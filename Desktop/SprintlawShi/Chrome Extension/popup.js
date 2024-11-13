document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const toggleElement = document.getElementById('googleMeetPlugin');
    const toggleContainer = document.querySelector('.toggle-container');

    console.log('toggleElement:', toggleElement);
    console.log('toggleContainer:', toggleContainer);

    if (!toggleElement || !toggleContainer) {
        console.error('Toggle element or container not found');
        return;
    }

    // Hide the toggle container initially using inline style
    toggleContainer.style.visibility = 'hidden';

    // Function to save the state of the sliders
    function saveState() {
        const googleMeetPluginState = toggleElement.checked;
        chrome.storage.sync.set({ googleMeetPlugin: googleMeetPluginState });
    }

    // Function to load the state of the sliders
    function loadState() {
        chrome.storage.sync.get(['googleMeetPlugin'], function(result) {
            // Temporarily disable transitions
            document.body.classList.add('no-transition');

            // Set the slider state
            toggleElement.checked = result.googleMeetPlugin !== undefined ? result.googleMeetPlugin : true;

            // Re-enable transitions
            requestAnimationFrame(() => {
                document.body.classList.remove('no-transition');
                // Show the slider now that the state is loaded
                toggleContainer.style.visibility = 'visible';
            });
        });
    }

    // Load the state when the popup is opened
    loadState();

    // Save the state when the slider is toggled
    toggleElement.addEventListener('change', saveState);
});
