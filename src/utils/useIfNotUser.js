 import {useSelector} from "react-redux";
 import { useNavigate } from "react-router-dom";
 import { useEffect } from "react";
const IfNotUser = ()=>{
const user = useSelector((store)=>store.user);

    const navigate = useNavigate();
    useEffect(()=>{

        if(user===null) {
          navigate("/");
          return;
        }
      },)
      
}

export default IfNotUser;