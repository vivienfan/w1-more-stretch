// Given two strings,
// write a program that outputs
// the shortest sequence of character
// insertions and deletions
// that turn one string into the other.
var commonSub = require("./common-sub");

var toDelet = [];
var toAdd = [];

var counter = 0;

function minModification(str0, str1) {
  counter++;
  if (str0 === "" && str1 === "") { return; }
  if (str0 === "") { toAdd.push(str1); return; }
  if (str1 === "") { toDelet.push(str0); return; }

  var longestCommon = commonSub.commonSub(str0, str1);
  if (longestCommon === "") {
    toDelet.push(str0);
    toAdd.push(str1);
    return;
  }
  var arr0 = str0.split(longestCommon);
  var arr1 = str1.split(longestCommon);
  minModification(arr0[0], arr1[0]);
  minModification(arr0[1], arr1[1]);
}

minModification("This is the longest subsequence, lily.", "The longest subsequence is all a lie.");
// console.log("This is the longest subsequence, lily.");
// console.log("The longest subsequence is all a lie.");
// console.log();
// console.log("delete:", toDelet);
// console.log("add:", toAdd);
console.log(counter);
console.log(commonSub.superCounter);
