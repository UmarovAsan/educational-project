const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const imageContainer = document.querySelector('.image-container');

async function searchImages(query) {
   try {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=12&tag_mode=all&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            imageContainer.innerHTML = '';

            data.results.forEach(result => {
                const newImg = document.createElement('img');
                newImg.classList.add('image-random');
                newImg.alt = 'image-random';
                newImg.src = result.urls.regular;
                imageContainer.appendChild(newImg);
            });
        } else {
            console.log("No photos found.");
        }
    } catch (error) {
        console.log(error);
    }
}

searchImages("bear");

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchImages(query);
    }
});


searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query !== '') {
            searchImages(query);
        }
    }
});
