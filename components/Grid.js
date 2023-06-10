import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Row from './Row';
import { useState, useEffect} from 'react';
import axios from 'axios';

export default function ProblemGrid( props ) {

    const [problemData, setProblemData] = useState([])
    
    useEffect(() => {
        const fetchData = async function(){
            setProblemData([])
            const url = "http://localhost:8080/problems"
            try{
                const response = await axios.get(url)
                setProblemData(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
        
    const getRows = () => {
        let inRows = []
        let prev = 1840
        let row = []
        for(let i=0; i<problemData.length; i+=1){
            let x = problemData[i]
            if(x.contestId != prev){
                inRows.push(row)
                row = [x]
            }
            else{
                row.push(x)
            }
            prev = x.contestId
            if(prev==1740){
                break
            }
        }
        inRows.push(row)
        return inRows
    }

    let i=0
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                {getRows(problemData).map((problemRow) => (
                    <Grid item xs={12} key={i=i+1}>
                        <Row problems={problemRow}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}