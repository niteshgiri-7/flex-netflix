export const formValidate = (email,password,name,signInForm)=>{
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordVAlid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
   if(!isEmailValid) return "Invalid email address";
   if(!isPasswordVAlid) return "Invalid Password";
    
   if(!signInForm){
      if(!name && name.trim()==="") return "name required";
   }
   return null;
}