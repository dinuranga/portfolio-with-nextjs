import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Dinuranga Portfolio</title>
      <meta name="theme-color" content="#020617"></meta>
      <Component {...pageProps} />
    </>
  );
}
