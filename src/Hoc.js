import React from "react"
import Spinnercom from "./spiner"
const Hoc = Component=>{
return props =>{
    return props.isLoading ? <Spinnercom/> :<Component {...props}/>
}
}
export default Hoc