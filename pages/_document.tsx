import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Antonio&family=Roboto+Mono:wght@300&display=swap" rel="stylesheet" />
                
                <!-- Google tag (gtag.js) -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-21YYHLM69N"></script>
                <script>
                {window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-21YYHLM69N');}
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
