import {Product} from './Product'; //importing the class product

var collection:Product[]=[];

var add=(data)=>{
    collection.push(data);
}

var remove = (index)=>{
    collection.splice(index-1,1); //previous ka next means the data to be deleted
}

var searchById=(id)=>{
    for(var data of collection){
    if(data.id==id)
        return data;
    }
}

var p1:Product={id:1,name:"Pepsi",price:30};
add(p1);

console.log("Add");
for(var data of collection){
    console.log(data);
}

console.log("remove");
remove(1);
for(var data of collection){
    console.log(data);
}

console.log("Search");
add(p1);
console.log(searchById(1));