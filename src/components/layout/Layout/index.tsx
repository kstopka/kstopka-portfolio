import * as React from "react";
import { FunctionComponent } from "react";
import { Navigation } from "..";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div className="layout">
            Layot
            <Navigation />
        </div>
    );
};

export default Layout;
