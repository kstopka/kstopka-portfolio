import * as React from "react";
import { FunctionComponent } from "react";
import { Layout, Navigation } from "../components/layout";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <div className="wrapper">
            <Layout></Layout>
        </div>
    );
};

export default App;
