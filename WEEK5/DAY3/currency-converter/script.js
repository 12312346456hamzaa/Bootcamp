const API_KEY = 'YOUR_API_KEY_HERE';

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const form = document.getElementById('converter-form');
const switchBtn = document.getElementById('switch-currencies');

let currencyCodes = [];

// 1. Récupère toutes les devises et remplis les <select>
async function fetchCurrencies() {
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`);
        const data = await res.json();
        if (data.result === "success") {
            currencyCodes = data.supported_codes;
            fromCurrency.innerHTML = '';
            toCurrency.innerHTML = '';
            currencyCodes.forEach(([code, name]) => {
                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = `${code} - ${name}`;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = code;
                option2.textContent = `${code} - ${name}`;
                toCurrency.appendChild(option2);
            });
            fromCurrency.value = "USD";
            toCurrency.value = "EUR";
        } else {
            resultDiv.textContent = "Unable to load currencies. Check your API key.";
        }
    } catch (e) {
        resultDiv.textContent = "Error fetching currencies.";
    }
}

// 2. Effectue la conversion
async function convertCurrency(e) {
    if (e) e.preventDefault();
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value || 1;
    if (from === to) {
        resultDiv.textContent = "Same currency selected!";
        return;
    }
    resultDiv.textContent = "Converting...";
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`);
        const data = await res.json();
        if (data.result === "success") {
            resultDiv.textContent = `${Number(amount).toLocaleString()} ${from} = ${data.conversion_result.toLocaleString(undefined, {maximumFractionDigits: 6})} ${to}`;
        } else {
            resultDiv.textContent = "Conversion error! Please try again.";
        }
    } catch (e) {
        resultDiv.textContent = "API request failed!";
    }
}

// 3. Switch button
switchBtn.addEventListener('click', () => {
    // Inverse les selects
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convertCurrency(); // reconvertit immédiatement
});

// 4. Form submit
form.addEventListener('submit', convertCurrency);

// 5. Initialisation
fetchCurrencies().then(() => convertCurrency());
