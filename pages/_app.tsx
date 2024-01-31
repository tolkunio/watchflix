import type {AppProps} from "next/app";
import '../styles/global.scss';
import MainProvider from "../app/providers/MainProvider";

export default function App({Component, pageProps}: AppProps) {
    return (
        <MainProvider>
            <Component {...pageProps} />;
        </MainProvider>
    )
}
