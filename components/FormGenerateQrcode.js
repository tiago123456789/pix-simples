
import React from "react";
import CurrencyInput from 'react-currency-masked-input'

export default ({ data, generateQrcode, saveAfterAction, handlerFieldValue }) => {
    return (
        <div className="max-w-2xl p-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Dados para gerar Qrcode Pix</h2>
        <form >
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Sua chave pix:</label>
                    <input id="username" type="text"
                    value={data.key} onChange={(event) => handlerFieldValue("key", event.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Valor do pix:</label>
                     <CurrencyInput defaultValue={data.value} onKeyUp={(event) => handlerFieldValue("value", event.target.value)}
                    type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                     />
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <button 
                onClick={generateQrcode}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Gerar qrcode</button>
                &nbsp; <button 
                onClick={saveAfterAction}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Salvar dados para reusar</button>
            </div>
        </form>
    </div>
    )
}