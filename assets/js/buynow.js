function openWhatsAppChat() {
    var phoneNumber = '+92-315-2306217';

    var whatsappURL = 'https://wa.me/923152306217/?text=Salam';

    window.open(whatsappURL);
    window.postMessage
}
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText = e.target.innerText;
        }
    });
});
