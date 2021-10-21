This is my very first project


Difficulties encountered:

-adding the ability to remove an item from the list of todos:
    -adding each new item dynamically generated to the array 'items'
        -sorted out: had to include the for loop in the addEventListener on the button
    -getting the todo to be removed by clicking on the cross
        -sorted out: had to add an event listener on the cross that sets the attribute onclick to the todo
                     (only when the pointer is on the cross), that calls a function that removes the todo when the cross is clicked 
