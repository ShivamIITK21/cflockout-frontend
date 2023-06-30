import Box from "@mui/material/Box";
import { Typography, Button, Grid } from "@mui/material";
import useStore from "./store";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Header() {
    const username = useStore((state) => state.username);

    const router = useRouter();
    const handleLogin = (event) => {
        router.push("/login");
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                // container
                sx={{
                    display: "flex",
                    backgroundColor: "primary.main",
                    height: "60px",
                    color: "secondary.main",
                }}
            >
                <Grid
                    item
                    xs={3}
                    sm={4}
                    md={6}
                    lg={12}
                    sx={{
                        marginLeft: "3%",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "40px",
                        }}
                    >
                        cfLockout
                    </Typography>
                </Grid>

                <Grid
                    container
                    sx={{
                        marginLeft: "3%",
                    }}
                >
                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            height: "40px",
                            margin: "10px",
                            fontFamily: "'Mukta', sans-serif",
                            fontSize: "20px",
                            color: "secondary.main",
                            "&:hover": {
                                color: "white",
                            },
                        }}
                        onClick={() => {
                            router.push("./");
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            height: "40px",
                            margin: "10px",
                            fontFamily: "'Mukta', sans-serif",
                            fontSize: "20px",
                            color: "secondary.main",
                            "&:hover": {
                                color: "white",
                            },
                        }}
                        onClick={() => {
                            router.push("./lockout");
                        }}
                    >
                        Lockout
                    </Button>
                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            height: "40px",
                            margin: "10px",
                            fontFamily: "'Mukta', sans-serif",
                            fontSize: "20px",
                            color: "secondary.main",
                            "&:hover": {
                                color: "white",
                            },
                        }}
                        onClick={() => {
                            router.push("./lockout");
                        }}
                    >
                        User Statistics
                    </Button>
                </Grid>

                {username == "" && (
                    <Button
                        onClick={handleLogin}
                        variant="text"
                        size="small"
                        sx={{
                            height: "40px",
                            marginY: "8px",
                            marginLeft: "auto",
                            marginRight: "30px",
                            fontFamily: "'Mukta', sans-serif",
                            fontSize: "20px",
                            color: "secondary.main",
                            "&:hover": {
                                color: "white",
                            },
                        }}
                    >
                        LOGIN
                    </Button>
                )}
                {username != "" && (
                    <Button
                        size="small"
                        variant="text"
                        sx={{
                            height: "40px",
                            marginY: "8px",
                            marginLeft: "auto",
                            marginRight: "30px",
                            fontFamily: "'Mukta', sans-serif",
                            fontSize: "20px",
                            backgroundColor: "primary.main",
                            color: "secondary.main",
                        }}
                    >
                        {username}
                    </Button>
                )}
            </Box>
        </ThemeProvider>
    );
}
