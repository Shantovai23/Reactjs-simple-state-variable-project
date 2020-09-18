import React, { useState } from 'react'


const App=()=>{
    const [IncDec,setIncDec]=useState(0)

    const Inc=()=>{
        setIncDec(IncDec+1)
    }

    const Dec=()=>{
        if(IncDec>0){
            setIncDec(IncDec-1)
        }else{
            alert('Minimun Limit is 0')
            setIncDec(0)
        }
       
    }
    return(
        <>
           <div className='main_div'>
           <div className='center_div'>
           <h1>{IncDec}</h1>
           <div className='button_div'>
           <button onClick={Inc}>Increment</button>
           <button onClick={Dec}>Decrement</button>
           </div>
           </div>

           </div> 
        </>
    )
}

export default App