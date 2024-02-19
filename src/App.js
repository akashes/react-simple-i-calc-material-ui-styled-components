import { useState } from 'react';
import './App.css';
import { TextField,Button } from '@mui/material'; 


function App() {
  const[details,setDetails]=useState({

  })
  const[value,setValue]=useState()

  // const reset=()=>{
  //   setValue('')
  //   setDetails({
  //     amount:" ",
  //     year:" ",
  //     rate:" "
  //   })
  // }
  const reset = () => {
    setValue('');
    setDetails({
      amount: '',
      year: '',
      rate: ''
    });
  };


  const getDetails=(e)=>{
    const {value,name}=e.target
   setDetails({...details,[name]:value})

  }
  console.log(details);
  const calculate=()=>{
    const {amount,year,rate}=details

    if(amount && year && rate){
      setValue(amount * year * rate)

    }else{
      alert('please enter all values')
    }
  }
  return (
<>
<div className="main-container">
  
<div className="container">
  <div className="header ">
    <h1>Simple Interest Calculator</h1>
    <p>Calculate simple interest easily</p>
  </div>
  <div className="total">
    <h2>
      ₹ {value}
    </h2>
    <p>Your total Interest</p>
  </div>
  <div className="form mt-5">
    <form action="">
      <div className="input">
      <TextField  value={details.amount} name='amount' onChange={getDetails} id="outlined-basic" label="Amount" variant="outlined" />
      <TextField value={details.year} name='year'  onChange={getDetails} id="outlined-basic" label="Year" variant="outlined" />
      <TextField value={details.rate} name='rate'  onChange={getDetails} id="outlined-basic" label="Rate" variant="outlined" />
      </div>
    <div className="buttons">
    <Button onClick={calculate} variant="contained">Calculate</Button>
      <Button onClick={reset} variant="contained">Reset</Button>
    </div>

    </form>
  </div>
</div>
</div>

</>

  
  )


   
  
}

export default App;
