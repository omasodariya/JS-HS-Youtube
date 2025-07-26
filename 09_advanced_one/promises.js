const promiseOne= new Promise(function(resolve,reject){
  // DO an async task
  //DB Calls, cryptography, network
  setTimeout(()=>{
    console.log("Async task is complete!!");
    resolve();
  },1000);
});

promiseOne.then(function(){
  console.log("promise consumed!!");
})

new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("Async task 2 is complete!!");
    resolve();
  },1000)
}).then(()=>{
  console.log("Async 2 Resolved !!");
})

const promiseThree= new Promise(function(resolve,reject){
  setTimeout(() => {
    resolve({username: "Chai", email:"code@exmple.com"});  
  }, 1000);
})

promiseThree.then((user)=>{
  console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error=false
       if(!error){
        resolve({username: "om", password:"12345678"});
       }else{
        reject('ERROR: somothing went wrong!!');
       }
    },1000)
})

promiseFour
.then((user)=>{
  console.log(user);
  return user.username;
})
.then((username)=>{
  console.log(username);
})
.catch((error)=>{
  console.log(error); 
})
.finally(()=>{
  console.log("The promice is either Resolved/Rejected");
})


const promiseFive= new Promise((resolve,reject)=>{
  setTimeout(()=>{
       let error=true
       if(!error){
        resolve({username: "Javascript", password:"1234abcd"});
       }else{
        reject('ERROR: JS went wrong!!');
       }
    },1000)
});

async function consumePromiseFive(){
  try {
    const response=await promiseFive;
    console.log(response);
    
  } catch (error) {
     console.log(error);
      
  }
}

consumePromiseFive();


// async function getAllUsers(){
//   try {
    
//        const response=await fetch('https://jsonplaceholder.typicode.com/users');
//       //  console.log(response);
//        const data=await response.json();
//        console.log(data);
    
//   } catch (error) {
//     console.log(error);
    
//   }
   
// }

// getAllUsers()

fetch('https://randomuser.me/api/').then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((error)=>console.log(error))
