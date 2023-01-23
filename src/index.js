const days = ['sunday', 'monday', 'tuesday'];

const items1 = obj.map(function(day){
    return "<li>"+ day +"</li>";
})

console.log(items1);
const items2 = obj.map( day =>`<li> ${day}</li>`); //day where this..

console.log(items2);