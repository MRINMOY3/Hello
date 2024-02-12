document.addEventListener('DOMContentLoaded', function() {
    // Get all card elements
    const cards = document.querySelectorAll('.card');

    // Get content placeholder element
    const contentPlaceholder = document.getElementById('contentPlaceholder');

    // Define content mapping
    const contentMap = {
        '': 'empty',
        'About': 'aboutContent',
        'Resume': 'resumeContent',
        'Transcript': 'transcriptContent',
        'Hobbies | Social Life': 'hobbiesContent'
    };

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the content data attribute value
            const contentKey = card.getAttribute('data-content');
            
            // Get corresponding content from the content map
            const contentId = contentMap[contentKey];
            
            // Get content element by ID
            const contentElement = document.getElementById(contentId);

            // Update content placeholder with clicked content
            contentPlaceholder.innerHTML = contentElement.innerHTML;

            // Set display style to block to make the content visible
            contentPlaceholder.style.display = 'block';

            // If the content key is empty, add a specific style
            if (contentKey === '') {
                // Add your style here
                contentPlaceholder.style.backgroundColor = 'lightgray';
                contentPlaceholder.style.padding = '20px';
            }
        });
    });
});
