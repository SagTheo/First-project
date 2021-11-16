This is my very first project

--> Make a french version of the app - done

Difficulties encountered:

-adding the ability to remove an item from the list of todos:
    -adding each new item dynamically generated to the array 'items'
        -sorted out: had to include the for loop in the addEventListener on the button
    -getting the todo to be removed by clicking on the cross
        -sorted out: had to add an event listener on the cross that sets the attribute onclick to the todo
                     (only when the pointer is on the cross), that calls a function that removes the todo when the cross is clicked

-getting the items to stay on the list after reloading the page
    -sorted out: used localStorage
    -making the items appear in the same order as when the user left the page (unresolved)
    -making the items interactive (possibility to delete them) after reloading the page
        -sorted out: had to add the for loop and the if statement in the onload function


-making the app responsive
    -sorted out: added media queries and played around with the width and height
 