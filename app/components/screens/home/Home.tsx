import {FC} from "react";
import {IHome} from "@/screens/home/Home.interface";
import Layout from "@/components/layout/Layout";

const Home:FC<IHome> = () => {
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    );
};

export default Home;