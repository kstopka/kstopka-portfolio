import * as React from "react";
import { FunctionComponent } from "react";
import Navigation from "../sections/Navigation";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="layout">
            <Navigation />
        </div>
    );
};

export default Layout;
