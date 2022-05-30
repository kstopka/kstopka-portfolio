import * as React from "react";
import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Navigation } from "../Views";

interface LayoutProps {}

export const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="layout">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};
