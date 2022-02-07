var memname = document.querySelector('.name');
var surname = document.querySelector('.surname');
var age = document.querySelector('.age');
var btn=document.querySelector('.btn');

var member = document.querySelector('.member');
var users=[
    {name:"Palonchiyev", surname:"Pistonchi", age:20},
    {name:"Abdullayev", surname:"Javohir", age:21},
    {name:"Nasriddinov", surname:"Umidjon", age:22},
    {name:"Xojiakbar", surname:"Abduvaxobov", age:23},
    {name:"Ermatov", surname:"Baxrom", age:24},
]

function renderMembers(){
    setTimeout(() => {
        
        var user='';
        users.map((value)=>{
            user+=`<p>${value.name} ${value.surname} ${value.age}</p>`
        })
        member.innerHTML=user;
    }, 2000);
}
function  addUser(){
    return new Promise((resolve, reject)=>{
        
        users.push({name:memname.value, surname:surname.value, age: age.value});
        resolve();
        console.log(users);
    })
    }
renderMembers();
btn.onclick=function(){
    addUser().then(renderMembers);
} 