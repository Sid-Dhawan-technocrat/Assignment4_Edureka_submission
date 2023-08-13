var ratingData=[
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

//distinct restaurant
let distinct=[];
for(let i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant)==-1){
        distinct.push(ratingData.restaurant);
    }
}

console.log(distinct);

let unique = ["KFC", "Burger King", "Domino", "Subway", "Pizza Hut"];

let avgRating = [];
let outRating = 0;
let count = 0;

for(let i=0;i<unique.length;i++){
    for(let j=0;j<ratingData.length;j++){
        if(unique[i]==ratingData[j].restaurant){
            outRating+=ratingData[j].rating;
            count+=1;
        }
    }


    var output=outRating/count;
    let myObj={};
    myObj.restaurant=unique[i];
    myObj.avgRating=output;
    console.log(myObj);
    avgRating.push(myObj);

    count=0;
    outRating=0;
}
let arr=[];
console.log(typeof(arr));
console.log("outRating =>", outRating, "count=>", count);
// console.log(output);//3.75
console.log(typeof(avgRating));

//b List of all restaurant with average rating greater than or equal to 4.
let i=0;
let answerArray=[];
 avgRating.forEach(element => {
     if(element.avgRating>=4){
         console.log(`The restaurant ${element.restaurant} has a rating ${element.avgRating} which is greater than or equal to 4`);
        answerArray.push(element);
     }
        });

console.log(answerArray);

let valAdder=0;

index = avgRating.findIndex(x => (x.avgRating)==1.5);

count+=1;
console.log(index);