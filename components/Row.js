import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import ProblemCell from "./Cell";

export default function Row(props) {
    const ID = props.contestId;
    const problems = props.problems;

    return (
        <Box
            sx={{
                flexGrow: 1,
                height: "100%",
                width: "90%",
                marginX: "5%",
                alignItems: "stretch",
            }}
        >
            <Grid container>
                <Grid
                    item
                    sx={{
                        width: "10%",
                        border: "2px solid #333333",
                        marginY: "-1px",
                        marginRight: "-1px",
                        textAlign: "center",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {problems.length==0 ? "" : problems[0].contestId}
                </Grid>
                <Grid item sx={{ width: "90%" }} container>
                    {problems.map((problem) => (
                        <Grid
                            item
                            xs={5}
                            sm={3}
                            md={2}
                            key={problem.contestId + problem.index}
                        >
                            <ProblemCell problem={problem} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}
