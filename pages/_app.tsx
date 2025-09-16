// pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Бъютичь — онлайн-демо</title>
        <meta name="description" content="Персональные рекомендации и визуализация прогресса: оцените изменения в режиме реального времени." />
        <meta property="og:title" content="Бъютичь — онлайн-демо" />
        <meta property="og:description" content="Слайдер До/После, реалистичная визуализация, интерактив." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#7B61FF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
