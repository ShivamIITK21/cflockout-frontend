import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// export const ProblemDataContext = createContext()
export default function UserInput() {

    const [user, setUser] = useState("")
    const [problemData, setProblemData] = useState([])

    async function handleSubmit() {
        if(user == "") return
        const url = "http://localhost:8080/problems?user=" + user
        console.log(url)
        try{
            const response = await axios.get(url)
            setProblemData(response.data)
        }catch(err){
            console.log(err)
        }
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //        

    return (
        // <ProblemDataContext.Provider value={problemData}>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" onChange={(e) => {setUser(e.target.value)}} label="userID" variant="outlined" sx={{
                height: "50px"
            }} />
            <Button variant="contained" onClick={handleSubmit} sx={{
                height: "50px",
                
            }}>Submit</Button>
        </Box>
        // </ProblemDataContext.Provider>
    );
}