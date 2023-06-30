import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#2b2d42",
        },
        secondary: {
            main: "#8d99ae",
        },
    },
});

export default function Lockout() {
    const router = useRouter();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Header />
            <Typography
                sx={{
                    marginTop: "30px",
                    marginLeft: "2.5%",
                    fontSize: "30px",
                    color: "#696969",
                }}
            >
                CONTEST DETAILS
            </Typography>
            <Box
                sx={{
                    width: "90%",
                    height: "400px",
                    padding: "2.5%",
                    marginX: "2.5%",
                    marginY: "20px",
                    border: "2px solid #555555",
                }}
            >
                <TextField
                    fullWidth
                    required
                    label="Expected Participants"
                    id="expectedParticipants"
                    helperText="(Codeforces ID of participants seperated by space)"
                    sx={{
                        marginX: "0.8%",
                    }}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    {/* <DateAndTime /> */}
                </FormControl>
            </Box>
            <Typography
                sx={{
                    marginTop: "30px",
                    marginLeft: "2.5%",
                    fontSize: "30px",
                    color: "#696969",
                }}
            >
                SELECT PROBLEMS
            </Typography>
            <Box
                sx={{
                    width: "90%",
                    height: "400px",
                    padding: "2.5%",
                    marginX: "2.5%",
                    marginY: "20px",
                    border: "2px solid #555555",
                }}
            >

            </Box>
        </ThemeProvider>
    );
}
