const generateMemeBtn = document.querySelector(".meme-generator .btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .title");
const memeAuthor = document.querySelector(".meme-generator .author");

const updateDetails = (url , title , author) => {
    memeImage.setAttribute("src" , url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by : ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((responses) => responses.json())
    .then((data) => {
        updateDetails(data.url , data.title , data.author);
    });
};

generateMemeBtn.addEventListener("click" , generateMeme);