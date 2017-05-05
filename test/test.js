var expect = require("chai").expect;
var commonSub = require("../lib/common-sub");
var minMod = require("../lib/min-modification");

describe("common longest subsequence", function() {
  beforeEach(function() {
    commonSub.init();
  });

  it ("should return \"he longest subsequence\" when\n\
       str0 = \"This is the longest subsequence.\" \n\
       str1 = \"The longest subsequence is all a lie.\"", function(){
    var result = commonSub.commonSub(
      "This is the longest subsequence.",
      "The longest subsequence is all a lie.");
    expect(result).to.equal("he longest subsequence");
  });

    it ("string inverted", function(){
    var result = commonSub.commonSub(
      "The longest subsequence is all a lie.",
      "This is the longest subsequence.");
    expect(result).to.equal("he longest subsequence");
  });

  it ("should return empty string when no common longest subsequence", function() {
    var result = commonSub.commonSub("aaa000aa0aaa0000000aa", "suiwelfo9jdkfjouwer");
    expect(result).to.equal("");
  });
});

describe("common longest subsequence - recursion approach", function() {
  beforeEach(function () {
    commonSub.init();
  });

  it ("should return \"he longest subsequence\" when\n\
       str0 = \"This is the longest subsequence.\" \n\
       str1 = \"The longest subsequence is all a lie.\"", function(){
    var result = commonSub.commonSubRecursion(
      "This is the longest subsequence.",
      "The longest subsequence is all a lie.");
    expect(result).to.equal("he longest subsequence");
  });

  it ("string inverted", function(){
    var result = commonSub.commonSubRecursion(
      "The longest subsequence is all a lie.",
      "This is the longest subsequence.");
    expect(result).to.equal("he longest subsequence");
  });

  it ("should return empty string when no common longest subsequence", function() {
    var result = commonSub.commonSubRecursion(
      "aaa000aa0aaa0000000aa",
      "suiwelfo9jdkfjouwer");
    expect(result).to.equal("");
  });
});

describe("minimum modification", function() {
  beforeEach(function() {
    minMod.init();
  });

  it ("should sugest \n\
      - to add \" is all a lie\" \n\
      - to delete \"his is t\" \n\
      when str0 = \"This is the longest subsequence.\"\n\
           str1 = \"The longest subsequence is all a lie.\"\n", function() {
    var result = minMod.minModification(
      "This is the longest subsequence.",
      "The longest subsequence is all a lie.");
    expect(result[0][0]).to.equal(' is all a lie');
    expect(result[1][0]).to.equal('his is t');
  });

  it ("should sugest \n\
       - to add \" is all a\" and \"e\" \n\
       - to delete \"his is t\", \",\" and \"ly\" \n\
       when str0 = \"This is the longest subsequence.\"\n\
            str1 = \"The longest subsequence is all a lie.\"\n", function() {
    var result = minMod.minModification(
      "This is the longest subsequence, lily.",
      "The longest subsequence is all a lie.");
    expect(result[0][0]).to.equal(' is all a');
    expect(result[0][1]).to.equal('e');
    expect(result[1][0]).to.equal('his is t');
    expect(result[1][1]).to.equal(',');
    expect(result[1][2]).to.equal('ly');
  });
});
