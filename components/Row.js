import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import ProblemCell from './Cell';

export default function Row(props) {

    const ID = props.contestId
    const problems = props.problems

    return (
        <Box sx={{ 
            flexGrow: 1,
            width: '90%',
            marginX: '5%', 
        }}> 
            <Grid container spacing={2}>
                <Grid item xs={12} container direction={"row"}>
                    {problems.map((problem) => (
                        <Grid item xs={5} sm={3} md={2} key={problem.contestId + problem.index}>
                            <ProblemCell problem={problem}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    )
}