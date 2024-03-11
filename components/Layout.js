import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>ThunderCats</title>
            </Head>
            <main>{children}</main>
        </>
    );
}