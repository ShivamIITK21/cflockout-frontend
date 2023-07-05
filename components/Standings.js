import { Box, Grid, Link } from "@mui/material";
import { ColorMap } from "./Cell";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Standings(props) {
    const { value, index, data } = props;

    const [ratings, setRatings] = useState({});

    useEffect(() => {
        function getRating(username) {
            const token = localStorage.getItem("token");
            const headers = {
                token: token,
            };
            const url =
                "http://localhost:8080/lockout/getUserRating?cfid=" + username;
            axios
                .get(url, { headers })
                .then((response) => {
                    console.log(response.data);
                    let rating = response.data.rating;
                    if (rating === null) {
                        rating = 0;
                    }
                    const newRatings = { ...ratings, [username]: rating };
                    setRatings(newRatings);
                    console.log(ratings);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        if (data != null) {
            Object.entries(data.session_data.participants).forEach(
                ([key, value]) => {
                    getRating(key);
                }
            );
        }
    }, [value]);

    const getParticipants = () => {
        let participants = [];
        if (data != null) {
            Object.entries(data.session_data.participants).forEach(
                ([key, value]) => {
                    let username = key;
                    let score = value;
                    participants.push({ username, score });
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
                            fontWeight: "600px",
                            fontFamily: "'Poppins', sans-serif",
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
                                marginRight: "4%",
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
                                <Link
                                    href={
                                        "https://codeforces.com/profile/" +
                                        participant.username
                                    }
                                    target="blank"
                                    sx={{
                                        textDecoration: "none",
                                        color: ColorMap(
                                            ratings[participant.username]
                                        ),
                                        "&:hover": {
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    {participant.username}
                                </Link>
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
