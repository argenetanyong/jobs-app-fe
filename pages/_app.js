import Layout from "../components/Layout";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
