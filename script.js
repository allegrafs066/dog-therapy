document.getElementById('new-dog').addEventListener('click', getDogImage);

function getDogImage() {
    fetch('https://api.thedogapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'api_key=live_7Pm5aENFdNo55oRtyFass1nWRackl0aMOWaSosOXZtgaTn3k5k32OE1L3jdBYx1U'
            }
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data[0].url;
            document.getElementById('dog-image').src = imageUrl;
        });
}

// Load a dog image on initial page load
getDogImage();