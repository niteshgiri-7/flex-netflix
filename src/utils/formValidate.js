export const formValidate = (email,password)=>{
   const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const isPasswordVAlid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if(!isEmailValid) return "Invalid email address";
   if(!isPasswordVAlid) return "Invalid Password";

   return null;
}