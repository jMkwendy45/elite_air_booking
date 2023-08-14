// import React, {useState} from 'react';
// import {registerAdminUrl} from '../../api/Api';
// import axios from 'axios';
// import {Box,TextField,Button,Typography} from '@mui/material';
// import AdminStyles from './styles/Admin.module.css'
// import { LoginStyles } from './styles/Styling';



// // import styles from "./styles/signUp.module.css";

// const AdminSignUp = () => {
//   const initialValue = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     userName: '',
//   };

//   const [data, setData] = useState (initialValue);

//   const handleChange = async e => {
//     e.preventDefault ();
//     setData (prevState => ({
//         ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async e => {
//         e.preventDefault ();
//         const userData = {
//             userName: data.userName,
//             firstName: data.firstName,
//             lastName: data.lastName,
//             email: data.email,
//             phoneNumber: data.phoneNumber,
//             password: data.password
//         }

//         const response = await axios.post(registerAdminUrl, userData)

//         if(response.status === 200){
//             console.log('BC res --> ',response.data)
//         }
//     }

//   return (
//     // <div className='signUp'>
//     //   <form onSubmit={handleSubmit}>
//     //     <div>
//     //     <label htmlFor="">
//     //       FirstName:
//     //        <input value={data.firstName} 
//     //       name="firstName"
//     //        onChange={handleChange} 
//     //        type="text" />
//     //     </label>
//     //     </div>
    

//        <Box className={AdminStyles.AdminSignUp}>
//       <Typography sx={LoginStyles.WelcText}Register></Typography>
//       <form className={AdminStyles.AdminSignUpForm} onSubmit={handleSubmit}>
//         <div className={AdminStyles.SignUpDiv1}>

//         <TextField
//         sx={LoginStyles.InputStyles}
//           label="FirstName"
//           value={data.firstName}
//           name='FirstName'
//           onChange={handleChange}
//           type='text'
//           variant="outlined"
//           />
//         </div> 

//         <div>
//           <TextField
//           sx={LoginStyles.InputStyles}
//         label="lastName"
//         value={data.lastName}
//         name="lastName" 
//         onChange={handleChange}
//          type="text" 
//          variant="outlined"
//          />
        
//         </div>

//         <div>
//             <TextField 
//            sx={LoginStyles.InputStyles}
//             label="email"
//             value={data.email}
//              name="email"
//              onChange={handleChange} 
//               type="email" 
//               variant='outlined'/>
      
//         </div>

//         <div>
//             <TextField 
//              sx={LoginStyles.InputStyles}  
//             value={data.userName}
//             label="userName"
//              name="userName"
//               onChange={handleChange}
//                type="text" 
//                variant="outlined"             
//                />
//         </div>
//         <div>
//             <TextField 
//            sx={LoginStyles.InputStyles}
//            label="phoneNumber"
//             value={data.phoneNumber} 
//             name="phoneNumber" 
//             onChange={handleChange} 
//             type="tel" 
//              variant="outlined"
//             />
//         </div>
//         <div>     
//          <TextField value={data.password}
//           name="password"
//             variant="outlined"
//            onChange={handleChange} 
//            type="password" />
//         </div>
//         <div>< Button 
//         variant="contained"
//         sx={LoginStyles.ButtonStyles}
//         type="submit">   
//           Submit</Button></div>
//       </form>
//     </Box>
//   );
// };

// export default AdminSignUp;
