import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ColorMap = (rating) => {
    if(rating == 0) return "black"
    if(rating < 1200) return "grey"
    if(rating < 1400) return "green"
    if(rating < 1600) return "#00c0c0"
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
        return "rgba(111, 211, 184, 0.7)"
    }
    else if(status=="WA"){
        return "rgba(247, 124, 124, 0.5)"
    }
    else{
        return "#ffffff"
    }
}


export default function ProblemCell( props ) {

    const { problem } = props
    var pName = problem.name
    if(pName.length > 16)   pName = pName.slice(0, 13) + "..."

    function handleRedirect(){
        window.open("https://codeforces.com/contest/" + problem.contestId + "/problem/" + problem.index)
    }

    return (
        <div>
            <Box onClick={handleRedirect} 
                sx={{
                    height: 30,
                    border: "2px solid #333333",
                    borderCollapse: "collapse",
                    paddingX: "8px",
                    paddingY: "4px",
                    margin: "-1px",
                    backgroundColor: getBGColor(problem.verdict),
                    '&:hover': {
                        cursor: "pointer",
                    },
                }}
                >
                <Grid container spacing={0}>
                    <Grid item sx={{
                        paddingLeft: "2px",
                    }}>
                        <Typography variant='h6' sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: ColorMap(problem.rating)
                        }}>{problem.index}. {pName}</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{
                        paddingRight: '5px',
                        textAlign: 'right',
                        color: ColorMap(problem.rating),
                    }}>
                        <Typography variant='subtitle2' sx={{
                            fontWeight: "500",
                            fontSize: "10px",
                            paddingBottom: "1px",
                        }}>{problem.rating}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}