let testRaw = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

const createArr = (str)=>{
    let s = str.split("\n");
    let a = s.map((str)=>str.split(" "));
    let b = a.map((arr)=> [arr[0],parseInt(arr[1])]);
    return b;
}

let testArr = createArr(testRaw);

//rules 

let labels = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];

//all five the same
// four the same
//full house (three same, 2 same)
//three same
//two pairs 
//one pair
//all diff 

//if two hands are the same type 
//compare first card, stronger card = rank higher 
//if same, compare second card 

//essentially, need to sort all the hands in order of rank 
//from lowest to highest 
//merge sort is one of the more efficient way to sort 
//so we will adapt merge sort to rank our hands 


const sortRank = (arr)=>{

    //split the arr in half 
    const length = arr.length;
    const middle = Math.floor(length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}


//types: five, four, full, three, two, one, high card 

const compareHand = (strOne,strTwo)=>{
    let output = [];
    let handOne = 0;
    let handTwo = 0;

    //figure out the type of each hand 



    //if both are the same type, then start comparing one card at a time 



}

const merge =(left,right)=>{
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        let handLeft = left[leftIndex][0];
        let handRight = right[rightIndex][0];

    }

}
