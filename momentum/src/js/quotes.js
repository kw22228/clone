const quotes = [];
const length = 15;

for (let i = 1; i <= length; i++) {
    quotes.push({
        quotes: 'quotes' + i,
        author: 'author' + i,
    });
}

export default function Quotes() {
    const plate = document.querySelector('#quotes');
    const randomIndex = Math.floor(Math.random() * quotes.length);

    const item = `
        <div>${quotes[randomIndex].quotes}</div>
        <div>${quotes[randomIndex].author}</div>`;

    plate.innerHTML = item;
}
