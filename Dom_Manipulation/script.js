/**
 * Get the Element and Event Listening
 */

// document
//   .getElementById("changeTextButton")
//   .addEventListener("click",  ()=> {
//       console.log(this); // this will return a Global context that is window

//   });

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this); //< button id="changeTextButton">Change Text</button>
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "My content is changed";
    //Add CSS
    paragraph.style.backgroundColor = "white";
    paragraph.style.color = "brown";
  });

/**
 * Example 2 Traverse the DOM
 */

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cities_list = document.getElementById("citiesList");
    cities_list.children[0].classList.add("highlight"); // this returns the first child and the classList return the array of classes associated with the element
  });

/**
 * Example 3 - Creating and Inserting Element
 */

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

/**
 * Example 4 -Removing DOM Elements
 */

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

/**
 * Example 5 - Event Handling
 *
 */
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    //dblclick (double click)
    alert("chaicode");
  });

/**
 * Example 6 - Event Delegation
 */

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You Selected: " + event.target.textContent);
  }
});

/**
 * Example 7 - Form Handling
 */
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // It will not refresh or go to other route that can be specified in action which is a default behavvious
    let feedback = document.getElementById("feedbackInput").value; // Only the input is grabbed
    document.getElementById("feedbackDisplay").textContent = feedback;
  });

/**
 * Example 8- DOM Content Loaded
 *
 */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Fullt loaded";
});

/**
 * Example 9 - CSS CLasses Manipulation
 */

// document
//   .getElementById("toggleHighlight")
//   .addEventListener("click", function () {
//     let text = document.getElementById("descriptionText");
//     text.classList.toggle("highlight"); // This can be done by the normal way by saying if the highlight exsist in the array then remove else add [Code given Beloe]
//   });

/**
 * Example 9 - Withouth Toggle function
 */
// document
//   .getElementById("toggleHighlight")
//   .addEventListener("click", function () {
//     let text = document.getElementById("descriptionText");
//     if (text.classList.contains("highlight")) {
//       text.classList.remove("highlight");
//     } else {
//       text.classList.add("highlight");
//     }
//   });
