import React, { useState } from 'react';
import { Countries } from '../../typings/countries';
import axios from 'axios'
import { createTicketUrl } from '../../api/Api';
import {TextField,Box,Button,Select,MenuItem,Typography, FormControl, InputLabel, FormLabel} from '@mui/material';
import Styles from '../ticket/styles/createTicket.module.css'
import {LoginStyles} from '../auth/styles/Styling.jsx'
const CreateTicktet = () => {
    const initialValue = {
        date: "",
        time: '',
        description: '',
        from: '',
        destination: '',
        departure:''
    } 

    const [data, setData] = useState(initialValue)

    const handleChange = (e) => {
        setData((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('data --> ', data)

        const formData = {
            ...data,
            date: data.date.toString(),
            time: data.time.toString()
        }
        await axios.post(createTicketUrl('64c7d332088415f5394d4f82'), formData)
        .then((response) => {
            console.log('Ticket response --> ', response.data)
        })
        .catch((error) => console.log('Ticket error --> ', error))
        // console.log('Ticket res 2 --> ', response.data)
        // if(response.status === 200){
        //     console.log('Ticket res 2 --> ', response.data)
        // }
    }

  return (
    <Box sx = {LoginStyles.LoginMainStyle} className = {Styles.ticketMainContain}>
        <Typography sx = {LoginStyles.WelcText}>CreateTicktet</Typography>
    
    <Box 
      component= "form" 
      className= {Styles.ticketForm} 
      onSubmit={handleSubmit}>


      <Box 
       className={Styles.ticketFormControl} 
       id={Styles.ticketTextField}>


        <FormControl
        sx={{hover:'unset',outline:'unset',}}
        className={Styles.ticketTextField}
        >
    
         <InputLabel>From</InputLabel>
            <Select
             name="from"
              id="from" 
              value={data.from} 
              onChange={handleChange}
              className={Styles.ticketTextField}
              >

            <MenuItem value="">Select Countries</MenuItem>
             {Countries.map((values, index) => (
             <MenuItem key={index} value={values}>{values}</MenuItem>
            ))}
            </Select>
         </FormControl>
         <FormLabel sx={{textAlign:"start",fontWeight:'700'}}>Departure Date</FormLabel>
         <Box className={Styles.ticketTextField}>
            <TextField
            sx={{'& fieldset':{border:'none'}}}
               type="date"
               name= 'departureDate'
               format="MM/DD/YY"
               value = {data.departure.slice(0,10)}
               onChange={handleChange}
               className={Styles.ticketTextField}
            />
         </Box>

         <Box className="time">
            <TextField
               type='time'
               name= 'time'
               value = {data.time}
               onChange={handleChange}
               className={Styles.ticketTextField}
            />
         </Box>
     </Box>
        <Box className= {Styles.ticketFormControl} id={Styles.ticketFormControl}>
            <FormControl className={Styles.ticketTextField}>
                <InputLabel>Destination</InputLabel>
                <Select 
                name="destination" 
                id="destination"  
                value={data.destination} 
                onChange={handleChange}
                className={Styles.ticketTextField}
                >
                    <MenuItem value="">Select Countries</MenuItem>
                    {Countries.map((values, index) => (
                        <MenuItem key={index} value={values}>{values}</MenuItem>
                    ))}
                </Select>
             </FormControl>
             <TextField
             fullWidth
             multiline
             name="description"
             id=""
             minRows={5}
             maxRows={5}
             value={data.description}
             onChange={handleChange}
             className={Styles.ticketTextField}
             />
        </Box>
     </Box>
       <Box className = {Styles.ticketBtn}>
         <Button 
         sx={LoginStyles.ButtonStyles}
         className={Styles.ticketTextField}
         id={Styles.ticketBtn}
         type="submit"
         >
            Submit
        </Button>
    </Box>
    </Box>
  )
}

export default CreateTicktet