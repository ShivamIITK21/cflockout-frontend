import { Box, Grid } from "@mui/material";
import { ColorMap } from "./Cell";
import axios from "axios";
import { useState } from "react";

export default function Standings(props) {

    const { value, index, data } = props;

    const getRating = (username) => {
        
    };

    const getParticipants = () => {
        let participants = [];
        if (data != null) {
            Object.entries(data.session_data.participants).forEach(
                ([key, value]) => {
                    let username = key;
                    let score = value;
                    participants.push({ username, score });
                    getRating(username)
                }
            );
            for (let i = 0; i < participants.length; i++) {
                for (let j = 0; j < participants.length - i - 1; j++) {
                    if (participants[j].score < participants[j + 1].score) {
                        let swap = participants[i];
                        participants[i] = participants[j];
                        participants[j] = swap;
                    }
                }
            }
        }
        return participants;
    };

    return (
        <Box>
            {value == index && (
                <Grid
                    container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "auto",
                        width: "95%",
                        marginX: "2.5%",
                        marginY: "20px",
                        paddingY: "20px",
                        fontSize: "18px",
                        fontFamily: "'Mukta', sans-serif",
                    }}
                >
                    <Box
                        sx={{
                            height: "50px",
                            marginTop: "10px",
                            borderBottom: "1px solid grey",
                            display: "flex",
                            flexDirection: "row",
                            fontSize: "24px",
                            fontWeight: "800px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "10%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            Rank
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "60%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            Username
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "30%",
                                justifyContent: "center",
                                alignItems: "end",
                                marginRight: "5%",
                            }}
                        >
                            Points
                        </Box>
                    </Box>
                    {getParticipants().map((participant, i) => (
                        <Box
                            key={i}
                            sx={{
                                height: "60px",
                                borderBottom: "1px solid grey",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "10%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {i + 1}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "60%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >   
                                {participant.username}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "30%",
                                    justifyContent: "center",
                                    alignItems: "end",
                                    marginRight: "5%",
                                }}
                            >
                                {participant.score}
                            </Box>
                        </Box>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
