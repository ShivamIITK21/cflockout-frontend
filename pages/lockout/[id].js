import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material"
import { useEffect, useState } from "react";
import useStore from "../../components/store";
import axios from "axios";
import ProblemsAndStandings from "../../components/ProblemsAndStandings";

export default function Lockout() {
    const router = useRouter();
    const [data, setData] = useState(null);

    const token = useStore((state) => state.token);
    const headers = {
        token: token,
    };

    useEffect(() => {
        if (!router.isReady) return;
        const fetchData = async function () {
            let url =
                "http://localhost:8080/lockout?session_id=" +
                router.query["id"];
            try {
                const response = await axios.get(url, { headers });
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 2000 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, [router.isReady]);

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "flexStart",
            }}
        >
            <Header />
            <ProblemsAndStandings data={data} />
            <Footer />
        </Box>
    );
}
