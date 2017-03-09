"use strict";
//STEP 1	
/*
var ANIMAL = {};
ANIMAL.Dog = function(weight, height, sound) {
    this.weight = weight;
    this.height = height;
    this.sound = sound;
}

ANIMAL.Cat = function(weight, height, sound){
    this.weight = weight;
    this.height = height;
    this.sound = sound;
}*/

//STEP 2
/*
var Cat = function () {
     weight : 10;
     color  : "white";
     sound  : "meow";
 }
var Dog = function (weight, color) {
    this.weight = weight;
    this.color  = color;
  }

*/

//STEP 3
/*var Cat = function () {
     weight : 10;
     color  : "white";
     sound  : "meow";
 }
var Dog = function (weight, color) {
    this.weight = weight;
    this.color  = color;
}

var puppy = new Dog(20, "White");*/

//STEP 4
/*
function Animal() {    
    window.console.log("The Animal has been created!");
}

var Dog = new Animal(); 
*/

//STEP 5
/*
function Animal(color) {
    this._color = color;
    window.console.log(this._color);
} 
var Dog = new Animal("white");
*/

//STEP 6
/*function Animal(type, breed, color, height, length){
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
var Pussy = new Animal("cat", "American shorthair"," white", "8inch", "18inch");*/

//STEP 7
/*var Animal = function (type, breed, color, height, length) {
    this._type   = type;
    this._breed  = breed;
    this._color  = color;
    this._height = height;
    this._length = length;
}
var Cat = new Animal();
for (var property in Cat) {
  window.console.log(property);
}

//STEP 8
/*
function Animal(color, type) {
    this._color = color;
    this._type = type;
    
    this.speak = function () {
        if (this._type === "Dog") {
                window.console.log("The " + this._color + " dog is barking");
          } else {
                window.console.log("The " + this._color + " cat is meowing"); 
        }
    }
}

var myPet = new Animal("black", "Dog");
myPet.speak();
*/

//STEP 9
/*
function Animal(color, type) {
    var _color = color;
    var _type = type;
    
    var checkType = function() {
        if(_type === "Dog"){
            return "Dog";
        } else {
            return "Cat";
        }
    };
    
    this.speak = function() {
        window.console.log("The " + checkType() + " has made noise!"); 
    };
};

var myPet = new Animal("Cat");
myPet.speak();
*/

//STEP 10
/*
String.prototype.findWords = function(word) {
    var words = this.split(' ');
    var num = 0;
    
    for(var i=0; i<words.length; i++) {
        if (words[i] === word)
            num++;
    }
    
    alert("Number of '" + word + "' in the paragraph is " + num);
};

var para = "Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.";

para.findWords("the");
*/

//The Receipe Card
/*var receipe = {
    title       : "Guacamole" ,
    serves      : 4 ,
    Ingredients :["3 Avacados", "1 Lime", "1 Teaspoon salt", "1/2 Cup onion", "3 Tablespoon Cilantro", "2 Diced tomatoes", "1 Teaspoon garlic", "1 Pinch Ground Pepper "]
};

window.console.log(receipe.title);
window.console.log("Serves:" + receipe.serves);
window.console.log("Ingredients:")
for( var i = 0;i <receipe.Ingredients.length ; i++)
    {
       window.console.log("-"+ receipe.Ingredients[i]) ;
    }*/

//The Reading List
/*
var books = [{
    title       : "The Hobbit",
    Author      : "J.R.R Tolkien",
    alreadyRead : false },
    {
    title       : "Harry Potter",
    Author      : "J.K Rowling",
    alreadyRead : true },
    {
    title       : "A Tale Of Two Cities",
    Author      : "Charles Dickens",
    alreadyRead : true
    },
    {
    title       : "War and Piece",
    Author      : "Leo Tolstoy",
    alreadyRead : false    
    },
             {
    title       : "The God Of Small Things",
    Author      : "Arundhthi Roy",
    alreadyRead : true    
    },
];

for(var i = 0 ; i< books.length; i++)
    {
        var bk = books[i];
        var bkInfo = bk.title + "by" + bk.Author;
        if(bk.alreadyRead == true) {
            window.console.log("You already read  " +bk.title + " by " + bk.Author );
        } else {
            window.console.log("You still need to read " +bk.title + " by " + bk.Author);
        }
        
}*/
