import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Lockout(){

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Header />
            
            <Footer />
        </div>
    )
}