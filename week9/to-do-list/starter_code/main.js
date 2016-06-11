//To do List API
//1. addToDoListItem
//2. removeToDoListItem
//3. editToDoListItem
//4. saveEditedToDoListItem
//5. markToDoListItemAscompleted
//  * Or switchCompletedStatusOfToDoListItem if students decide they want to be able to undo marking an item as complet.
//6. emptyToDoList
//7. removeCompletedToDoListItems
//8. updateNumberOfToDoListItems

//##Pseudocode

//1. When the user submits their to-do list item
//    * Select the input field the user has typed their to-do list infor into
//    * Get the value of the input field
//    * Create a list item
//    * Place the text inside of the list item
//    * Append the list item to our ordered to-do list

//2.  When the user clicks remove next to a to do list item
//    * Select the to-do list item the user wants to remove
//    * Delete the selected item from the page

// 3.	When the user clicks the edit better next to a list item
// 	*	Select the to-do list item the user wants to edit
// 	*	Replace the text in the list item with an input whose value is the same as the existing text
// 	*	Show the save edit button and hide the edit button

// 4.	When the user clicks the save edit button
// 	*	Select the to-do list item the user wants to save
// 	*	Get the value of the input inside of this item
// 	*	Replace the input in the list item with the value of the input field
	
// 5.	(if using check box method, there is nothing to do)
// If using line-through method:
// 	*	When the user clicks on the list item
// 	*	Get the to-do list item the user clicked on
// 	*	Add a css line-through style to the item
 
// 6.	When the user clicks the Clear List button
// 	*	Select the list
// 	*	Empty the list
// Optional: Store the emptied list to allow the user to go back.

// 7.	When the users clicks the Clear Completed button
// 	*	Select each to-do list item
// 	*	Check to see if it has been completed
// 	*	If it has been completed, remove the to-do list item
  
// (in practice, select each to-do list item could be select completed to-do list items *if you're using a class to style a completed item*)

 
 
// 8.	Select the to-do list counter element
// 	*	Set the text inside the to-do list counter element to the number of items in the to-do list


$(function() {
  //Initial Count
  var count = 0;
  
  //Event Listeners
  
  //When an item is submitted in the #new form add item to list
  $('#new').on('submit', addNewItem);
  //When the user clicks remove link, remove that item
  $('#todos').on('click','.remove', removeItem);
  //When the edit link is clocked go into edit mode
  $('#todos').on('click', '.edit', editItem);
  //What the item editor is submitted, save the changes
  $('#todos').on('submit', '.editor', saveItem);
  
  //Functions
  
  function updateCount(){
    //Log the current count
    console.log(count)
    //Count of the number of items
    count = $('#todo li').not('.done').length();
    console.log(count);
    
    //Print the new count
    $('#count').html(count);
  }
  
  function addNewItem(event) {
    //"e" stands for event, we are looking to remove the default function of an event
    event.preventDefault();
    //Get the text the user entered
    var newItem = $('#newItem').val();
    //add an <li> with the text submitted
    $('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
    
    updateCount();
  }
  
  function removeItem(event) {
    //we are looking to remove the default function of an event
    event.preventDefault();
    
    //The parent is the item that we need to remove
    $(this).parent().remove();
    //"this" is looking at the link and then removing the parent of the link.  If we didn't put parent, it would remove the link but not the actual list item.  "This" is referring to that which started the function, in this case, the remove item button
    
    updateCount();
  }

  function editItem(event){
    event.preventDefault();
    var itemText = $(this).siblings('.item').html();
    var listItem = $(this).parent();

    listItem.html('<form class="editor"><input value="' + itemText + '"></form>');
    listItem.find('input').focus();
  }

  function saveItem(event){
    event.preventDefault();
    var itemText = $(this).children('.item').val();
    var listItem = $(this).parent();
    listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>')
  }

});


