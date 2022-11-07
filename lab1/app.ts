
// First Problem
// ======================= //
const reverseWord = (...word: string[]): string => {

    
    const wordVailed :string = word.toString()
    const wrdArr: string[] = wordVailed.split("");
    wrdArr.reverse();
    const wrdStr: string = wrdArr.join("");

    return wrdStr;
}
// happy case
console.log(reverseWord("ahmed"));

// worest case
console.log(reverseWord(1234,"ahmed","ali","ADEL"));
// ======================= //

// secondProblem


const currencyGenerator = (currnsry: (string|number)[]): string => `${currnsry[1]}${currnsry[0]}`;


console.log(currencyGenerator([100, "$"]));

// ======================= //

// Thired Problem

const wordsCounter = (wordCount: string, target: string): number => {

    const wordCountArray: string[] = wordCount.split(" ");

    let filterd = wordCountArray.filter((index: string) => target.toLowerCase() === index.toLowerCase() || target.toUpperCase() === index.toUpperCase());

    return filterd.length;

}
// happy case

console.log(wordsCounter("Type script superset of java script", "SCRIPT"));

// worest case

console.log(wordsCounter("Type ScrIpT superset of java SCRIPT", "SCripT"));


// ======================= //

// Fourth Problem

interface CartItem {
    id: number,
    title: string,
    variantId?: any
}



const addToCart = (item: CartItem): string => `User id is ${item.id} : \n in his Card (${item.title}) to cart`;

console.log(addToCart({ id: 1, title: 'Mobile Phone' }));

// Ahmed Elkoumey