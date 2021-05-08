import React, { useState, useEffect } from "react";
import { QrCodePix } from 'qrcode-pix';
import { useToasts } from "react-toast-notifications";
import FormGenerateQrcode from "../components/FormGenerateQrcode";
import ExplainProject from "../components/ExplainProject";
import QrcodeAction from "../components/QrcodeAction";
import { download } from "../utils/File";
import Footer from "../components/Footer";

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
               <Footer />

        </>
    )
}