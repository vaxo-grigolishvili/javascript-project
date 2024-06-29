async function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';
     const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f9eb2197bbmsh7b16d707228dd64p1774a8jsn883977aed0f7',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
      };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('შეცდომა კურის გამოთვლისას გთხოვთ სცადოთ თავიდან');
        }
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        const exchangeRate = data.rates[to];
        const convertedAmount = amount * exchangeRate;

        document.getElementById('result').innerText = `მისაღები თანხა : ${convertedAmount.toFixed(2)} ${to}`;

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'შეცდომა მოგვიანებით ცადეთ';
    }
}