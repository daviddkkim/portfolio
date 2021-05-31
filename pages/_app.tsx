import "../styles/globals.scss";
import { AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
export default MyApp;
