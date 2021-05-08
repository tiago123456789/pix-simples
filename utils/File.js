export const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
}
