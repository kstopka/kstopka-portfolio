import * as React from "react";
import { FunctionComponent } from "react";
import { Layout } from "../components/layout";
import "../styles/button.css";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Layout></Layout>
        </div>
    );
};

export default App;
