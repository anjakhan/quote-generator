function displayFavorites() {
	quoteContainer.hidden = true;
	main.hidden = false;
	main.innerHTML = "";
	let div = document.createElement("div");
	let divContainer = div.setAttribute("class", "quote-container");
	
	for(let i = 0; i < localStorage.length; i++){
		const key = localStorage.key(i);
	    const value = localStorage.getItem(key);
		
	 	main.innerHTML += `<div class="favorite-container" id="favorite-container">
            <div class="quote-text">
                <i class="fas fa-quote-left"></i>
                <span id="quote" class="long-quote">${key}</span>
            </div>
            <div class="quote-author">
                ~ <span id="author">${value}</span> ~
            </div>
        </div>`;
	}
};

function displayQuote() {
	quoteContainer.hidden = false;
	main.hidden = true;
}

document.getElementById("heart").addEventListener("click", displayFavorites);
document.getElementById("quotes").addEventListener("click", displayQuote);