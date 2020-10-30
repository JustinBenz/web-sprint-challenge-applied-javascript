// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from "axios"
axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) =>{
        // console.log(cardMaker(res.data))
        console.log(res)
    })
    .catch((fuzz) => {
        console.log(fuzz)
    })

    
function cardMaker(article){
    
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const authorIMGBox = document.createElement('div');
    const authorIMG = document.createElement('img');
    const authorSig = document.createElement('span');

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author')
    authorIMGBox.classList.add('img-container');
    
    card.appendChild(headline);
    card.appendChild(author);
    authorIMGBox.appendChild(authorIMG);
    author.appendChild(authorIMGBox);
    author.appendChild(authorSig);

    card.addEventListener('click', (event) => {
        console.log(headline);
    })
    return card;
}