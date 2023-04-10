const { reviewData, historyData, playModes } = window;

window.onload = () => {
    loadReviews();
    loadHistory();
    loadGameModes();
}

function fillRating(nTimes){
    let outStr = "";
    for (let i = 0; i < nTimes; i++){
        outStr += "⭐"
    }
    return outStr;
}

function capitalizeFirstLetter(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function resetForm(formSelector){
    const form = document.querySelector(formSelector);

    form.reset();
}


// Load Data
function loadReviews() {
    const reviewContainer = document.querySelector("#review-container");

    if (reviewContainer)
    {
        if (reviewContainer.hasChildNodes()) {
            reviewContainer.innerHTML = "";
          }
          
        for (const r of reviewData){
            
    
            const reviewCard = document.createElement("div");
            reviewCard.classList.add("review-card");
        
            const starContainer = document.createElement("div");
            starContainer.classList.add("star-container");
            const stars = document.createTextNode(fillRating(r.rating));
            starContainer.appendChild(stars);
            // append to parent
        
            const reviewTextContainer = document.createElement("div");
            reviewTextContainer.classList.add("review-text");
        
            const reviewText = document.createElement("p");
            const review = document.createTextNode(r.reviewText);
            reviewText.appendChild(review);
        
            const reviewAuthor = document.createElement("p");
          
            const author = document.createTextNode(`- ${r.name} (${  r.date.toLocaleString().split(",")[0]})`);
    
            reviewAuthor.appendChild(author)
            reviewTextContainer.append(reviewText);
            reviewTextContainer.append(reviewAuthor);
            reviewTextContainer.append();
            
      
        
            reviewCard.appendChild(starContainer);
            reviewCard.appendChild(reviewTextContainer);
        
            reviewContainer.appendChild(reviewCard);
        
        }
    
    }

  }

  function loadHistory() {
    const historyContainer = document.querySelector("#history-container");

    if (historyContainer) {
        if (historyContainer.hasChildNodes()) {
            historyContainer.innerHTML = "";
          }
        for (const h of historyData){
            const historyCard = document.createElement("div");
            historyCard.classList.add("history-card");
    
            const historyImg = document.createElement("img");
            historyImg.src = h.img;
            historyImg.alt = h.alt
        
            const historyTextOverlay = document.createElement("div");
            historyTextOverlay.classList.add("text-overlay");
    
            const historyTitle = document.createElement("h2");
            const title = document.createTextNode(h.year);
            historyTitle.appendChild(title);
    
            const historyText = document.createElement("strong");
            const text = document.createTextNode(h.historyText);
            historyText.appendChild(text);
    
            historyTextOverlay.appendChild(historyTitle)
            historyTextOverlay.appendChild(historyText)
        
            historyCard.appendChild(historyImg);
            historyCard.appendChild(historyTextOverlay);
        
            historyContainer.appendChild(historyCard);
        
        }
    
    }
  }

  function loadGameModes(){

    const historyContainer = document.querySelector("#play-mode-container");

    if (historyContainer) {
        for (const pm of playModes){

            const historyCard = document.createElement("div");
            historyCard.classList.add("history-card");
    
            const historyImg = document.createElement("img");
            historyImg.src = pm.img;
            historyImg.alt = pm.alt;
        
            const historyTextOverlay = document.createElement("div");
            historyTextOverlay.classList.add("text-overlay");
    
            const historyTitle = document.createElement("h2");
            const title = document.createTextNode(pm.title);
            historyTitle.appendChild(title);
    
            const historyText = document.createElement("p");
            const text = document.createTextNode(pm.description);
            historyText.appendChild(text);
    
            historyTextOverlay.appendChild(historyTitle)
            historyTextOverlay.appendChild(historyText)
        
            historyCard.appendChild(historyImg);
            historyCard.appendChild(historyTextOverlay);
        
            historyContainer.appendChild(historyCard);
        
        }
    
    }

  }

//   Forms

//   Handle Review Submit
  function handleReviewSubmit(){
    let rName = document.querySelector("#name");
    let rRating = document.querySelector("#rating");
    let rReview = document.querySelector("#review");

    const fName = capitalizeFirstLetter(rName.value.split(" ")[0]);

    const userReview = new Review(fName, new Date(), rRating.value, rReview.value);

    reviewData.push(userReview);
    loadReviews();
    resetForm("#review-form");

}

//   Handle Newsletter Submit
function handleNewsletterSubmit(){
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let sendTo = document.querySelector("#send-to");

    const fName = capitalizeFirstLetter(name.value.split(" ")[0]);

    reviewData.push(userReview);
    resetForm("#newsletter-form");

}