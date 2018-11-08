/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
let max = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
let maxOfThree = (num1, num2, num3) => {
  let maxnum = 0
  if (num1 > num2 && num1 > num3) {
    maxnum = num1
  } else {
    if (num2 > num1 && num2 > num3) {
      maxnum = num2
    } else {
      maxnum = num3
    }
  }

  return maxnum
}
// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
let sum = (a, b) => {
  return a + b
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

// ...
let sumOfArray = array1 => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return array1.reduce(reducer, 0)
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// ...
let isVowel = string => {
  if (
    string === 'a' ||
    string === 'e' ||
    string === 'i' ||
    string === 'o' ||
    string === 'u' ||
    string === 'y' ||
    string === 'A' ||
    string === 'E' ||
    string === 'I' ||
    string === 'O' ||
    string === 'U' ||
    string === 'Y'
  ) {
    return true
  } else {
    return false
  }
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...
let rovarspraket = string => {
  //split the string
  let arrayString = string.split('')
  //if the character is a space then return a space
  let rovarspraketted = char => {
    //if the character is not a space then return a vowel if its a vowel
    if (isVowel(char)) {
      return char
    } else {
      //if its not a vowel then return the character with a the character an 'o' and the character
      return char + 'o' + char
    }
  }

  //do it to the array
  return arrayString.map(rovarspraketted).join('')
}
/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

let reverse = string => {
  let arrayString = string
    .split('')
    .reverse()
    .join('')
  return arrayString
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
let findLongestWord = words => {
  let arrayOfWords = words.split(' ')
  let longestString = ''
  for (let index = 0; index < arrayOfWords.length; index++) {
    if (longestString.length < arrayOfWords[index].length) {
      longestString = arrayOfWords[index]
    }
  }
  return longestString
}
// ...

/**
 * NOTE: Don't modify anything below this line...
 */
// let findLongestWord = array =>
/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
