import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';



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
           <Tooltip title="Add">
           <Button onClick={Inc} className='btn_green'><AddIcon/></Button>
           </Tooltip>
           <Tooltip title="Delete">
           <Button onClick={Dec} className='btn_red'><DeleteIcon/></Button>
           </Tooltip>
           </div>
           </div>

           </div> 
        </>
    )
}

export default App