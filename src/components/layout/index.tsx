import * as React from "react";
import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage } from "../Pages";
import Navigation from "../sections/Navigation";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="layout">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default Layout;
