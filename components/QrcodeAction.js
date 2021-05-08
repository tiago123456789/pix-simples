import React from "react";

export default ({ setIsEnableForm, download, qrcode }) => (
    <div className="max-w-2xl qrcode-position">
    <embed style={{ width: "250px", height: "250px"}} 
 src={qrcode} />
    <button onClick={() => setIsEnableForm(true) }
    className="mx-3 md:mx-8 px-6 py-2 my-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
    >Gerar novo qrcode
    </button>&nbsp;<br/>
    <button className="mx-3 md:mx-8 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        onClick={() => download(qrcode)}
    >Baixar para enviar</button>
</div>
)
