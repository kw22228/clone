import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [wallet, setWallet] = useState('');
    const [canBuy, setCanBuy] = useState('');
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
        setCanBuy(Math.floor(wallet / e.target.value));
    };

    function Coins() {
        return (
            <select onChange={coinChange}>
                <option value="">Select</option>
                {coins.map(({ id, name, symbol, quotes }) => (
                    <option key={id} value={quotes.USD.price}>
                        {name} ({symbol}) ${quotes.USD.price} USD
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
            {wallet && (
                <>
                    <Coins />
                    {canBuy && <h3>You can buy {canBuy} coins!!</h3>}
                </>
            )}
        </div>
    );
}

export default App;
