/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
const max = (a, b) => {
  if(a >= b) {
    return a;
  } else {
    return b;
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
const maxOfThree = (a,b,c) => {
  // if(a >= b) {
  //   if(a >= c) {
  //     return a;
  //   } else {
  //     return c;
  //   }
  // } else if(b > c) {
  //     return b;
  // } else {
  //   return c;
  // }
  return max(max(a,b), c);
}
// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
const sum = (a, b) => {
  return a + b;
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
const sumOfArray = (arr) => {
  // let sum = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;
  return arr.reduce(sum, 0);
}
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
const isVowel = (letter) => {
  // if(typeof(letter) == "string"){
  //   if(letter.toLowerCase() == 'a' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' || letter.toLowerCase() == 'u') {
  //     return true;
  //   }
  // }
  // return false;
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
  // let tempArr = [];


      // if(!isVowel(val)) {
      //   return (val + "o" + val);
      // } else {
      //   return val;
      // }

    // for(let i = 0; i < str.length; i++) {
    //   tempArr.push(str[i]);
    //   if(typeof(str) == "string") {
    //     if(!isVowel(str[i])) {
    //       tempArr.push("o" + str[i]);
    //     }
    //   }  
    // }

  // else {
  //   // tempArr = [str + ""];
  // }

  // console.log(tempArr.join(""));
  // console.log(typeof(str));
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
  // let newStr = "";
  // for(let i = str.length - 1; i >= 0; i--) {
  //   newStr += str[i];
  // }
  // return newStr;
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
  // let tempArr = str.split(" ");
  // let longest = "";
  // let longestLength = 0;
  // for(let i = 0; i < tempArr.length; i++) {
  //   if(tempArr[i].length > longestLength) {
  //     longest = tempArr[i];
  //     longestLength = tempArr[i].length;
  //   }
  // }
  // return longest;
}
// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
