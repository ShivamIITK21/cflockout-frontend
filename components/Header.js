import Box from "@mui/material/Box"
import UserInput from '../components/userInput';
import { Typography } from "@mui/material";

export default function Header() {
    return (
        <Box sx={{
            width: "100%",
            height: "120px",
            marginBottom: "30px",
            position: "sticky",
            top: "0",
        }}>
            <Box sx={{
                backgroundColor: "#525252",
                height: "60px",
                color: "#d4d4d4",
            }}>
                <Typography sx={{
                    fontSize: "40px",
                    marginLeft: "3%"
                }}>
                    cfLockout
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: "#d4d4d4",
                height: "60px",
            }}>
                <UserInput />
            </Box>
        </Box>
    )
}