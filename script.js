(function () {
   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter of the name and convert it to lowercase
    
    if (firstLetter === 'j') { // If the first letter is 'j', print 'Goodbye' + name
        console.log("Goodbye " + names[i]);
    } else { // If the first letter is not 'j', print 'Hello' + name
        console.log("Hello " + names[i]);
    }
}

})();
