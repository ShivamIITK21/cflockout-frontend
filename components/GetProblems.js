import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect} from 'react';
import axios from 'axios';
import useStore from './store';
import { create } from 'zustand'
import ProblemGrid from './Grid';
import Grid from '@mui/material'
import UserInput from "../components/userInput";


export const probStore = create((set) => ({
    problems : [],
    setProblems: (data) => set(() => ({ problems : data })),
}))

export const lastContestStore = create((set) => ({
    lastContest : "",
    setLastContest: (data) => set(() => ({ lastContest : data })),
}))

export default function Problems() {

    const currentCFID = useStore((state) => state.currentCFID)
    const probs = probStore((state) => state.problems)
    const setProbs = probStore((state) => state.setProblems)
    const setLC = lastContestStore((state) => state.setLastContest)
    const lc = lastContestStore((state) => state.lastContest)
    
    useEffect(() => {
        const fetchData = async function(){
            let url = "http://localhost:8080/problems"
            if(currentCFID!="")    url = url + "?user=" + currentCFID
            try{
                const response = await axios.get(url)
                setLC(response.data[0].contestId)
                setProbs(response.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[currentCFID])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                sx={{
                    backgroundColor: "#d4d4d4",
                    height: "60px",
                }}
            >
                <UserInput />
            </Box>
            <ProblemGrid problems={probs} lastContest={lc} />
        </Box>
    );
}