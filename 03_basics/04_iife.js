// Imediately Invoked Function Expression (IIFE) Example

(function chai(){
  // named IIFE
  console.log("DB connected");
})(); // This function runs immediately after its definition

( (name)=>{
  console.log(`DB connected ${name}`);
} )("om");