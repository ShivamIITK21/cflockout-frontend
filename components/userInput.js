import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import useStore from './store';


export default function UserInput() {

    const setUser = useStore((state) => state.setUsername)
    const [input, setInput] = useState("")

    const handleSubmit = () => {
        if(input == "") return
        setUser(input)
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                paddingY: '20px'
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" onChange={(e) => {setInput(e.target.value)}} label="userID" variant="outlined" sx={{
                height: "50px",
            }} />
            <Button variant="contained" onClick={handleSubmit} sx={{
                height: "50px",
            }}>Submit</Button>
        </Box>
    );
}
