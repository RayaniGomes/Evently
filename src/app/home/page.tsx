import Banner from "@/(components)/banner";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";

export default function Home() {
    return (
        <main style={{height: "100vh"}}>    
            <Navbar />
            <Banner />
            <Footer />
        </main>        
    );
}