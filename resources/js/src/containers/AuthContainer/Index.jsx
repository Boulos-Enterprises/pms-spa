import { BrowserRouter as Router, Routes,Route,useMatch  } from "react-router-dom"
import MainApp from "../../mainapp"

const Index = ()=>{
    const match = useMatch ('/');

    //console.log(match?'TRUE':'FALSE')
   
    return (
 
    <div className="w-full h-full bg-red-300">
        <h1 className="text-red-200"> Welcome to Login</h1>
    </div>
       
      
    )
}

export default Index