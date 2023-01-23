const days = ['sunday', 'monday', 'tuesday'];

const items1 = days.map(function(day){
    return "<li>"+ day +"</li>";
})

console.log(items1);
const items2 = days.map( day =>`<li> ${day}</li>`); //day where this..

console.log(items2);



// spread operator 
const firstA = [1,2,3];
const secondA = [4,5,6];

//mtd1 : concat 

const thirdA = firstA.concat(secondA);

console.log(thirdA);

//mtd2 

const fourthA = [...firstA, 7, ...secondA, 8 ];
console.log(fourthA);

// Spread operator in objects 

const address1 = {
    street : '',
}
const address2 = {
    city : '',
    state : ''
}

const combined = {...address1, ...address2, 'landmark' : 'near patanjali wali shop'};

console.log(combined);
//spread operator can be used in objects to get clone of objects