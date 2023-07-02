import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContestDetails from "../../components/contestDetails";
import ProblemDetails from "../../components/problemDetails";
import { useState } from "react";
import axios from "axios";
import useStore from "../../components/store";

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

    const token = useStore((state) => state.token);
    const [participants, setParticipants] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [duration, setDuration] = useState("");
    const [problems, setProblems] = useState([
        {
            index: 0,
            rating: "800",
            score: "100",
        },
    ]);

    const handleCreateLockout = () => {
        
        let lockoutDetails = {}
        lockoutDetails.participants = participants.split(" ")
        lockoutDetails.start_time = startTime 
        lockoutDetails.ratings = []
        lockoutDetails.score = []
        lockoutDetails.duration = parseInt(duration, 10)
        for(let i=0; i<problems.length; i++){
            lockoutDetails.ratings.push(problems[i].rating)
            lockoutDetails.score.push(problems[i].score)
        }

        const headers = {
            'Content-Type': 'application/json',
            "token": token
        }
        axios
            .post("http://127.0.0.1:8080/lockout/create", lockoutDetails, {headers} )
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleRemove = (index) => {
        let newProblems = []
        let idx=0
        for(let i=0; i<problems.length; i++){
            if(i != index){
                newProblems.push(problems[i])
                newProblems[idx].index = idx
                idx += 1
            }
        }
        setProblems(newProblems)
        console.log(newProblems[index])
        console.log(problems[index])
    }

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
            <ContestDetails
                participants={participants}
                setParticipants={setParticipants}
                startTime={startTime}
                setStartTime={setStartTime}
                duration={duration}
                setDuration={setDuration}
            />
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
            <ProblemDetails problems={problems} setProblems={setProblems} handleRemove={handleRemove} />

            <Button
                variant="contained"
                onClick={handleCreateLockout}
                sx={{
                    backgroundColor: "#494647",
                    marginLeft: "2.5%",
                    marginBottom: "30px",
                    "&:hover": {
                        backgroundColor: "primary.main",
                    },
                }}
            >
                CREATE
            </Button>
            <Footer />
        </ThemeProvider>
    );
}
