import React, { useState, useEffect } from "react";
import { QrCodePix } from 'qrcode-pix';
import { useToasts } from "react-toast-notifications";
import FormGenerateQrcode from "../components/FormGenerateQrcode";
import ExplainProject from "../components/ExplainProject";
import QrcodeAction from "../components/QrcodeAction";
import { download } from "../utils/File";

export default () => {
    const { addToast } = useToasts();
    const [isEnableForm, setIsEnableForm] = useState(true);
    const [data, setData] = useState({});
    const [qrcode, setQrcode] = useState(null);

    const saveAfterAction = (event) => {
        event.preventDefault();
        if (typeof window !== "undefined") {
            localStorage.setItem("data", JSON.stringify({ key: data.key, name: data.name }));
            addToast("Dados foram salvos para simplificar geração do qrcode pix.",  { appearance: "success" })

        }
    }

    const isValid = () => {
        if (!data.key || data.key.length == 0) {
            return false;
        }

        if (!data.name || data.name.length == 0) {
            return false;
        }

        if (data.value == null || data.value <= 0) {
            return false;
        }

        return true;
    }

    const generateQrcode = async (event) => {
        event.preventDefault();
        if (!isValid()) {
            addToast("Empreencha todos os dados para gerar o qrcode do pix.",  { appearance: "error" })
            return;
        }

        const qrcode = await QrCodePix({
            version: '01',
            key: data.key,
            name: " ",
            city: ' ',
            transactionId: ' ',
            message: ' ',
            cep: '99999999',
            value: parseFloat(data.value),
        }).base64();
        setQrcode(qrcode);
        setIsEnableForm(!isEnableForm);
        setData({ ...data, value: null });
    }

    const handlerFieldValue = (key, value) => {
        setData({...data, [key]: value });
    }

    const loadDataSaved = () => {
        if (!localStorage.getItem("data")) {
            return;
        }
        const data = localStorage.getItem("data");
        setData(JSON.parse(data))
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            loadDataSaved();
        }
    }, []);

    return (
        <>
                <ExplainProject />

                { !isEnableForm && <QrcodeAction 
                    setIsEnableForm={setIsEnableForm}
                    download={download} qrcode={qrcode} /> 
                }
                { isEnableForm && <FormGenerateQrcode 
                    data={data} 
                    saveAfterAction={saveAfterAction}
                    handlerFieldValue={handlerFieldValue} 
                    generateQrcode={generateQrcode} />
                }
                <br/>
                <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Pix simples —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Desenvolvido por Tiago rosa da costa</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="ml-3 text-gray-500" target="_blank" href="https://www.linkedin.com/in/tiago-rosa-da-costa/">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>

        </>
    )
}