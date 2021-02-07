// An example of  a O(1) time
function printFirstItem(items){
    console.log(items[0]);
}


// This is an example of a O(n) time
function printAllItems(items){
    items.forEach(item => {
        console.log(item);
    });
}


// An example of a O(n^2)
function printAllPossibleOrderedPairs(items){
    items.forEach(firstItem => {
        items.forEach(secondItem => {
            console.log(firstItem, secondItem);
        });
    });
}

printAllPossibleOrderedPairs([1,2,3,4,5,6,7,8,9])


//another O(n) notation
function sayHiNTimes(n) {
    for (let i=0; i < n; i++){
        console.log('hi');
    }
}

//With Big0 notation we just throw out the constants for example below
// a O(2n) is also a O(n) notation

function printAllItemsTwice(items){
    items.forEach(item => {
        console.log(item);
    });

    //Once more, with feeling
    items.forEach(item => {
        console.log(item);
    });
}


//Returning the largest number
function getLargestItem(items) {
    let largest = -Number.MAX_VALUE;
    items.forEach(item => {
      if (item > largest) {
        largest = item;
      }
    });
    return largest;
  }
