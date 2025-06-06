// Search up elements
// Search up by element, search up by classes, search up by id.
// console.log(document.getElementById("welcome"));

// Create new elements
// Edit elements
// Add another item to our shopping list
// Ice Cream
// const newShoppingItem = document.createElement("li");
// newShoppingItem.innerText = "Ice Cream";
// const shoppingList = document.getElementById("list");
// shoppingList.appendChild(newShoppingItem);


$(document).ready(()=> {
  const newShoppingItem = $("<li>Ice Cream</li>");
  $("#list").append(newShoppingItem);

  $("#list").on("click", (event) => {
    console.log("Mouse position:", event.clientX, event.clientY);
  });
  // setTimeout(()=> {
  //   // Clear our list
  //   $("#list").empty();
  // }, 2000)
})
// const shoppingList = $("#list");
// shoppingList.append(newShoppingItem);

// create an element in jquery $(<p>)

// search for an element $("p")
// search for a class $(".className")
// search for a id $("#id")

// search for the ul element



// Delete elements

