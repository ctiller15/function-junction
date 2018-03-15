/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
const max = (...arr) => {
  return arr.reduce( (a, b) => {
    return a >= b ? a : b;
  });
  // if(a >= b) {
  //   return a;
  // } else {
  //   return b;
  // }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
const maxOfThree = (a,b,c) => {
  return max(max(a,b), c);
}
// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
const sum = (...arr) => {
  return arr.reduce((a, b) => {
    return a + b;
  });
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

const sumOfArray = (arr) => {
  return arr.length > 0 ? sum(...arr) : 0;
}
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
const isVowel = (letter) => {
  let vowels = 'aeiouAEIOU';
  return vowels.includes(letter);
}
// ...

 /**
  * Write a function rovarspraket() that will translate
  * a text into a "rövarspråket". That is, double every
  * consonant and place an occurrence of "o" in between.
  *
  * For example, rovarspraket("this is fun") should
  * return the string "tothohisos isos fofunon".
  */
const rovarspraket = (str) => {
  if(isNaN(str)) {
    str = str.split("").map( (val) => {
      return !isVowel(val) ? (val + "o" + val) : val;
    });
  } 
  return typeof(str) === "object" ? str.join("") : str + "";
}
// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
const reverse = (str) => {
  return str.split("").reverse().join("");
}
// ...

 /**
  * Write a function findLongestWord() that takes an
  * string returns the first, longest word in the array.
  *
  * i.e. findLongestWord("book dogs") should return "book"
  */
const findLongestWord = (str) => {
  return str.split(" ").sort((a,b) => {
    return b.length - a.length;
  })[0];
}
// ...

/*
Write a function factorialize() that takes in an
integer and returns the factorial of that provided
integer. *taken from FreeCodeCamp*
i.e. factorialize(5) returns 120.
*/
const factorialize = (num) => {
  return num <= 1 ? 1 : num * factorialize(num - 1);
}
// ...


/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava';


// Some extra tests may have been taken from FreeCodeCamp... Maybe...
test('max()', (t) => {
  t.is(max(1, 3), 3);
  t.is(max(0, 3), 3);
  t.is(max(10, 3), 10);
  t.is(max(-1, -3), -1);
  t.is(max('aaa', 0), 0);
  t.true(isNaN(max('aaa', 'bbb')));
  t.is(max(1,2,3,4), 4);
  t.is(max(50,10,3,453,10), 453);
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3);
  t.is(maxOfThree(0, 3, -1), 3);
  t.is(maxOfThree(10, 3, 50), 50);
  t.is(maxOfThree(-1, -3, -10), -1);
  t.is(maxOfThree('aaa', 0, 1), 1);
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')));
  t.is(maxOfThree(10, -2, 5), 10);
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19);
  t.is(sum(4, 100), 104);
  t.is(sum(8,12,20), 40);
  t.is(sum(13, 38, 53, 87), 191);
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3);
  t.is(sumOfArray([1, 2, 3]), 6);
  t.is(sumOfArray([10, 9, 8]), 27);
  t.is(sumOfArray([]), 0);
  t.is(sumOfArray([1,2,3,4,5,6,7,8,9,10]), 55);
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false);
  t.is(isVowel('B'), false);
  t.is(isVowel('b'), false);
  t.is(isVowel('a'), true);
  t.is(isVowel('E'), true);
  t.is(isVowel('i'), true);
  t.is(isVowel('o'), true);
  t.is(isVowel('u'), true);
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a');
  t.is(rovarspraket('b'), 'bob');
  t.is(rovarspraket('cat'), 'cocatot');
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot');
  t.is(rovarspraket(0), '0');
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob');
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew");
  t.is(reverse("Hello"), "olleH");
  t.is(reverse("Howdy"), "ydwoH");
  t.is(reverse("Greetings from Earth"), "htraE morf sgniteerG");
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book');
  t.is(findLongestWord('life the universe and everything'), 'everything');
  t.is(findLongestWord("The quick brown fox jumped over the lazy dog"), "jumped");
  t.is(findLongestWord("May the force be with you"), "force");

})

test('factorialize()', (t) => {
  t.is(factorialize(5), 120);
  t.is(factorialize(10), 3628800);
  t.is(factorialize(20), 2432902008176640000);
  t.is(factorialize(0), 1);
} )

/* eslint-enable */
