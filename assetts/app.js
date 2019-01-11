var complete;
var accomplished;
//  ============================= START CODING BELOW! =============================================
// Create an initial count variable
var count = 0;
//  On Click event associated with the add-to-do function
$("#add-to-do").on("click", function (event) {
    // prevent form from submitting
    event.preventDefault();
    // Get the to-do "value" from the textbox and store it a variable
    var value = $('#to-do').val()
    // Create a new variable that will hold a "<p>" tag.
    var items = $("<p>"); // Then give it an ID in the following form:
    // "item-4" or "item-3" or "item-99", where the number is equal to count.
    oneClick = items // Then set the to-do "value" as text to this <p> element.
    items.attr("id", "item" + count);
    items.html(value);
    // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
    complete = $("<button>");
    complete.attr("data-to-do", count);
    complete.addClass("checkbox");
    complete.append(" √ ");
    // Give your button a data attribute called data-to-do and a class called "checkbox".
    // Lastly add the letter X inside.
    items = items.prepend(complete);
    // Append the button to the to do item
    // items = items.prepend(complete);
    // Add the button and toDoItem to the to-dos div
    $("#to-dos").append(items);
    // Clear the textbox when done
    $("#to-do").val("");
    // Add to the count
    count++;

    if (event.list) {
        localStorage.setItem('to-do-list', JSON.stringify(event));

        if (localStorage.getItem('to-do-list')) {

            var list = localStorage.getItem('to-do-list');

            var x = JSON.parse(list);
            console.log(event.list);
        } else {
            alert('you may want a better computer');
        }
    }
    $('#to-do-item').text(event.list)
    //  When a user clicks a check box then delete the specific content
    //  (NOTE: Pay attention to the unusual syntax here for the click event.
    //  Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
    $(document.body).on('click', '.checkbox', function () {
        // Get the todoNumber of the button from its data attribute.
        $(this).closest("p").remove();
    });

});