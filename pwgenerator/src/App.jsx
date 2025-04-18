import "./App.css";
import React,{useState,useCallBack} from "react"
function App() {
  const [value,setValue] = useState(8);
  const[number,setNumber]=useState(false);
  const [char,setChar] =useState(false);
  const [pw,setPassword]=useState();

  const pwgenerator=useCallBack(()=>{
    let pass="";
    let str="";
  },[value,number,char,setPassword])

  }
  return (
    <div className="bg-black h-dvh w-dvw m-4px p-0px flex flex-col items-center">
    
      <div className="bg-white w-200 h-30 flex  m-5 p-3 justify-between rounded">
       <div className="flex flex-row justify-between w-200 h-15 ">
       <input placeholder="hello" className="w-150 h-9 text-center" />
       <button className="bg-blue-500 rounded h-9 w-20 text-white">Copy</button>
       </div>
       <div>

        </div>
      </div>
    </div>
  );
}
export default App;   
