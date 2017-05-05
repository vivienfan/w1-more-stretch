// Given two strings,
// write a program that outputs
// the shortest sequence of character
// insertions and deletions
// that turn one string into the other.
var commonSub = require("./common-sub");

module.exports = {
  toDelet: [],

  toAdd: [],

  counter: 0,

  helper: function (str0, str1) {
    this.counter++;
    if (str0 === "" && str1 === "") { return; }
    if (str0 === "") { this.toAdd.push(str1); return; }
    if (str1 === "") { this.toDelet.push(str0); return; }

    var longestCommon = commonSub.commonSub(str0, str1);
    if (longestCommon === "") {
      this.toDelet.push(str0);
      this.toAdd.push(str1);
      return;
    }
    var arr0 = str0.split(longestCommon);
    var arr1 = str1.split(longestCommon);
    this.helper(arr0[0], arr1[0]);
    this.helper(arr0[1], arr1[1]);
  },

  minModification: function(str0, str1) {
    this.helper(str0, str1);
    // console.log("Add the following to str0:", this.toAdd);
    // console.log("Remove the following from str0", this.toDelet);
    // this.selfComplexity();
    return [this.toAdd, this.toDelet];
  },

  selfComplexity: function() {
    console.log("Self complexity:", this.counter);
  },

  totalComplexity: function() {
    commonSub.complexity();
  },

  init: function() {
    this.toDelet = [];
    this.toAdd = [];
    this.counter = 0;
  }
}
