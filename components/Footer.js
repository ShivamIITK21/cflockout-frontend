import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {
    return (
        <Box
            sx={{
				marginTop: "20px",
				borderTop: "1px solid rgba(0, 0, 0, 0.5)",
                width: "100%",
				color: "black",
                height: 100,
				fontSize: "30px"
            }}
        >
			<Typography sx={{
				padding: "10px",
				textAlign: "center",
			}}>
				Made By Programming Club IITK
			</Typography>
		</Box>
    );
}
