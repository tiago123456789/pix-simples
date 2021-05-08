import Link from "next/link";
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import '../styles/globals.css'
import "../styles/pix.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps, company, foods }) {
  return (
    <>
       <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Pix simples</title>
        <meta name="description" content="Uma forma simples de gerar qrcode pix apenas com a chave e valor. Permitindo fazer isso rápido e fazer o download do qrcode para compartilhar no whatsapp"/>
        <meta name="robots" content="all"/>
        <meta name="author" content="Tiago rosa da costa"/>
        <meta name="keywords" content="Pix, qrcode, simples, envia qrcode pelo whatsapp, qrcode pix para comerciantes, pequenos empreendedores, pagamento rápido e simples "/>

        <meta property="og:type" content="page"/>
        <meta property="og:url" content=""/>
        <meta property="og:title" content=""/>
        <meta property="og:image" content=""/>
        <meta property="og:description" content=""/>

        <meta property="article:author" content=""/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@"/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:creator" content="@"/>
        <meta name="twitter:description" content=""/>

      </Head>
      <ToastProvider autoDismiss={true} autoDismissTimeout="4000">
        <Component {...pageProps} foods={foods} company={company} />
      </ToastProvider>
    </>
  )
}

export default MyApp;
