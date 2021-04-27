import React from "react";
import { hot } from "react-hot-loader/root";
import About from "./components/about";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import NewsletterSection from "./components/newsletterSection";

function App(): JSX.Element {
    return (
        <>
            <Nav />
            <Header />
            <Features />
            <About />
            <NewsletterSection />
            <Footer />
        </>
    );
}

export default hot(App);
