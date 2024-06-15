// pages/_app.tsx
import "../app/globals.css"; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
