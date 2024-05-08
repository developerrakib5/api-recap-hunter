// ! Intro To JSON, JSON Structure, Parse, Stringify

const user = { id:1, name:'adu vai', job: 'Doctor'}
// JSON
const stringiFied = JSON.stringify(user)
console.log(user);
console.log(stringiFied);

/*
{ id: 1, name: 'adu vai', job: 'Doctor' }
{"id":1,"name":"adu vai","job":"Doctor"} -----------> JSON Stringify 
*/

const shop = {
    owner : 'Alia',
    address : {
        street : "kocu Khet",
        city   : 'Ranvi',
        country : 'BD',
    },
    products : ['Laptop', 'mic', 'monitor', 'keyboard'],
    revenue  : 45000,
    isOpen   : true,
    isNew    : false,
}
console.log(shop);
// ! Strngify JSON 
const shopJson = JSON.stringify(shop);
console.log(shopJson);
// ! Parse JSON
const shopObj = JSON.parse(shopJson);
console.log(shopObj);

