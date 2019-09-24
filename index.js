const dataUsers = ['a:2','admin:123e', 'user1:user',];

const inputCheck = () =>{
let login = document.getElementById("userName").value;
let password = document.getElementById("password").value;
let answer = login + ':' + password;
console.log(answer)
if(dataUsers.includes(answer)){
	if(answer === 'a:2'){ 
    document.location.href = "./pages/a.html"
  
}

  if(answer === 'admin:123e'){ 
    document.location.href = "./pages/admin.html"
  
}
    
     if(answer === 'user1:user'){ 
      document.location.href = "./pages/user.html"
 
   }
     
     
    }
     if(login === '' && password === ''){
        document.location.href = "./pages/guest.html"}
    

}
  



