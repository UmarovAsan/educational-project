const newImg = document.createElement('img');
newImg.classList.add('image-random');
newImg.alt = 'image-random';
document.querySelector('.image-container').appendChild(newImg);

const searchBtn = document.querySelector('.search-btn');
const apiUrl = "https://api.unsplash.com/search/photos?query=winter&per_page=10&tag_mode=all&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

newImg.src = apiUrl;

async function fetchHandler() {
   try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);
        newImg.src = data.file;
        if (data.results && data.results.length > 0) {
            newImg.src = data.results[0].urls.regular;
        } else {
            console.log("No photos found.");
        }
    } catch (error) {
        console.log(error);
    }
}


fetchHandler();

searchBtn.addEventListener('click', () => {
    fetchHandler();
});

