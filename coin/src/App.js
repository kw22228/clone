import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [wallet, setWallet] = useState('');

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers/?limit=100')
            .then(res => res.json())
            .then(json => {
                setCoins(json);
                setLoading(prev => !prev);
            });
    }, []);

    const coinChange = e => {
        console.log(e.target.value);
    };

    function Coins() {
        return (
            <select onChange={coinChange}>
                <option>Select</option>
                {coins.map(({ id, name, symbol, quotes }) => (
                    <option key={id} value={quotes.USD.price}>
                        {name} ({symbol}) ${Math.ceil(quotes.USD.price)} USD
                    </option>
                ))}
            </select>
        );
    }

    return (
        <div>
            <h1>The Coins! {loading || `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <input type="number" onChange={e => setWallet(e.target.value)} value={wallet} />
            )}

            <hr />
            {wallet && <Coins />}
        </div>
    );
}

export default App;
