"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const bookAnswerEl = document.getElementById("book-answer")
const activityAnswerEl = document.getElementById("activity-answer")
const submissionBtn = document.getElementById("submission-btn")


// Declare a constant variable named "book" and assign
// the name of your favorite book to that variable.
const book = "One For The Money"

// Declare a mutable variable named "activity" and assign
// an activity to it.

let activity = "Photography"

function updateBookSentence() {
    // Sets the text inside the element with the id of book answer. 
    // innerText is one of many properties on a HTML element.
    bookAnswerEl.innerText = book
}

function updateActivitySentence() {
    // Update this function 
    // (hint: it will be similiar to the previous function)
    activityAnswerEl.innerText = activity;
}

function render() {
    // Finish writing this function
    updateBookSentence();
    updateActivitySentence();

}

submissionBtn.addEventListener("click", function () {
    // Calling the function that renders the update
    // when the button is clicked
    render();
})
