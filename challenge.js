const counterElement = document.querySelector("h1#counter");
//buttons

let counterButton = document.querySelector("button#pause");
let minusButton = document.querySelector("button#minus");
let plusButton = document.querySelector("button#plus");
let heartButton = document.querySelector("button#heart");
let likeButton = document.querySelector("button#heart")
let likes = document.querySelector("ul.likes");


//state
let count = 0;
let likeCount = 0;

//interval setter
let intervalControl = setInterval(incrementCount, 1000);
let likeInterval = setInterval(resetLike, 1000);

//event handlers
counterButton.addEventListener("click", function(event){
    // this function works. you can switch between pause and resume. (wasnt able to do this before)
    if(event.target.id === "pause") {
        event.target.id = "resume";
        event.target.innerHTML = "resume";
        clearInterval(intervalControl);
    } else {
        event.target.id = "pause";
        event.target.innerHTML = "pause";
        intervalControl = setInterval(incrementCount, 1000);
    }
});

plusButton.addEventListener("click", incrementCount);


minusButton.addEventListener("click", decrementCount);


likeButton.addEventListener("click", handleLike);


// small functions, like little machines. Try to aim for this: each function should actually make/do
//only one thing but can call other functions as well. 

function displayCount() {
    counterElement.innerHTML = String(count);
};

function incrementCount() {
    count ++;
    displayCount();
};

function decrementCount() {
    count --;
    displayCount();
};

function resetLike() {
    likeCount = 0;
};

// document.querySelector(`[data-num='${counter.innerHTML}']`)


function handleLike() {
    likeCount ++;
   
    let newLi = document.createElement("li");
    newLi.setAttribute("data-num", `${counterElement.innerHTML}`);

    let newSpan = document.createElement("span");
    newSpan.innerHTML = `${String(likeCount)}`;
    newLi.innerHTML = `${count} was liked ` + newSpan.innerHTML + ' times.'
    newLi.appendChild(newSpan);
    likes.appendChild(newLi);
}

// likeCount++
// let li = document.createElement("li");
// li.innerHTML =  