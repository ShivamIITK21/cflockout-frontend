import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ColorMap = (rating) => {
    if(rating == 0) return "black"
    if(rating < 1200) return "grey"
    if(rating < 1400) return "green"
    if(rating < 1600) return "cyan"
    if(rating < 1900) return "blue"
    if(rating < 2100) return "#a0a"
    if(rating < 2300) return "#ff8c00"
    if(rating < 2400) return "#ff8c00"
    if(rating < 2600) return "red"
    if(rating < 3000) return "red"
    return "red"
}

const getBGColor = (status) => {
    if(status=="AC"){
        return "#c3e6cb"
    }
    else if(status=="WA"){
        return "#f77c7c"
    }
    else{
        return "#f8f9fa"
    }
}


export default function ProblemCell( props ) {

    const { problem } = props
    var pName = problem.name
    if(pName.length > 15)   pName = pName.slice(0, 13) + "..."

    function handleRedirect(){
        window.open("https://codeforces.com/contest/" + problem.contestId + "/problem/" + problem.index)
    }

    return (
        <Box onClick={handleRedirect} 
            sx={{
                width: 200,
                height: 50,
                border: "1px solid #333333",
                paddingLeft: "12px",
                paddingTop: "6px",
                fontSize: "24px",
                backgroundColor: getBGColor(problem.status),
                '&:hover': {
                    cursor: "pointer",
                    // backgroundColor: "cyan"
                },
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant='h6' sx={{
                        fontSize: "20px",
                        color: ColorMap(problem.rating)
                    }}>{problem.index}. {pName}</Typography>
                </Grid>
                <Grid item xs={12} sx={{
                    paddingLeft:"170px",
                    paddingRight:0,
                }}>
                    <Typography variant='subtitle2' sx={{
                        fontSize: "10px",
                        paddingBottom: "1px",
                    }}>{problem.rating}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}