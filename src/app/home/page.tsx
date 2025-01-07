import Banner from "@/(components)/banner";
import Card from "@/(components)/card";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";

export default function Home() {
    return (
        <main>    
            <Navbar />
            <Banner />
            <Card />
            <Footer />
        </main>        
    );
}