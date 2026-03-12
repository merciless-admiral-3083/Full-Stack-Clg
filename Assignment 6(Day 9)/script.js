const API_KEY = "#API KEY TO BE MASKED a96cc4bcc3734e999494a9461768122a";

async function getNews(topic = "technology") {

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    displayNews(data.articles);
}

function displayNews(articles){

    const container = document.getElementById("newsContainer");
    container.innerHTML = "";

    articles.forEach(article => {

        const div = document.createElement("div");
        div.className = "news";

        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No Description"}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;

        container.appendChild(div);
    });
}

window.onload = () => {
    getNews();   
};