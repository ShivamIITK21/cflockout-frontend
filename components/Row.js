import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import ProblemCell from './Cell';

export default function Row(props) {

    const ID = props.contestId
    const problems = props.problems

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                {problems.map((problem) => (
                    <Grid item key={problem.contestId + problem.index}>
                        <ProblemCell problem={problem}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}