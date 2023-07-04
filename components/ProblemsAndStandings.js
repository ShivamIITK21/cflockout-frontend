import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Standings from "./Standings";
import LockoutProblems from "./lockoutProblems";

export default function ProblemsAndStandings(props) {

    const { data } = props
    const colors = ["#28a745", "#169db2", "#9933cc", "#E7394B", "#ffc107"];
    const colors2 = ["#2e9145", "#158697", "#721D9C", "#ED142A", "#FFAD08"];
    const [value, setValue] = React.useState(1);

    const getColors = () => {
        if(data==null)  return 
        let i=0
        let color = {}
        Object.entries(data.session_data.participants).forEach(
            ([key, value]) => {
                let username = key;
                color[username] = [colors[i], colors2[i]]
                i = (i+1)%(colors.length)
            }
        );
        return color
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "90%", marginY: "30px", marginX: "5%" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                    width: "80%",
                    marginY: "30px",
                }}
            >
                <Tab value={1} label="PROBLEMS" />
                <Tab value={2} label="STANDINGS" />
            </Tabs>
            <LockoutProblems value={value} index={1} data={data} color={getColors()} />
            <Standings value={value} index={2} data={data} />
        </Box>
    );
}
