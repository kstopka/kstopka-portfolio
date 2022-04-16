import * as React from "react";
import { FunctionComponent } from "react";
import "./navigation.css";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <div>
            <div className="nav">Navigation</div>
        </div>
    );
};

export default Navigation;
