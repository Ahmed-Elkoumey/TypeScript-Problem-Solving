// First Problem
// ======================= //
var reverseWord = function () {
    var word = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        word[_i] = arguments[_i];
    }
    var wordVailed = word.toString();
    var wrdArr = wordVailed.split("");
    wrdArr.reverse();
    var wrdStr = wrdArr.join("");
    return wrdStr;
};
// happy case
console.log(reverseWord("ahmed"));
// worest case
console.log(reverseWord(1234, "ahmed", "ali", "ADEL"));
// ======================= //
// secondProblem
var currencyGenerator = function (currnsry) { return "".concat(currnsry[1]).concat(currnsry[0]); };
console.log(currencyGenerator([100, "$"]));
// ======================= //
// Thired Problem
var wordsCounter = function (wordCount, target) {
    var wordCountArray = wordCount.split(" ");
    var filterd = wordCountArray.filter(function (index) { return target.toLowerCase() === index.toLowerCase() || target.toUpperCase() === index.toUpperCase(); });
    return filterd.length;
};
// happy case
console.log(wordsCounter("Type script superset of java script", "SCRIPT"));
// worest case
console.log(wordsCounter("Type ScrIpT superset of java SCRIPT", "SCripT"));
var addToCart = function (item) { return "User id is ".concat(item.id, " : \n in his Card (").concat(item.title, ") to cart"); };
console.log(addToCart({ id: 1, title: 'Mobile Phone' }));
// Ahmed Elkoumey
