import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Layout></Layout>
            </BrowserRouter>
        </div>
    );
};

export default App;
