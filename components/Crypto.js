import React from "react";
import Nomics from "nomics";
import { orderBy } from "lodash";
import { to } from "await-to-js";

const apiKey = "53d8fffd7523f4bf547d31a165a070f84c338df1";
const nomics = new Nomics({ apiKey });

const SORT_BY = ["portfolioValue"];
const SORT_ORDER = ["desc"];
const PORTFOLIO = {
  // BTC: { quantity: 2.272, usdInvested: 18435.34 },
  ETH: { quantity: 3.717, usdInvested: 2779.06 },
  MM4: { quantity: 50, usdInvested: 50 },
  DOGE: { quantity: 23413.5, usdInvested: 5000 },
  SOL: { quantity: 89.926, usdInvested: 3273.39166 },
  SFAX: { quantity: 93919678.97787109, usdInvested: 676.713 },
  BABYDOGE2: { quantity: 47715996546.546961, usdInvested: 276 },
  RUNE: { quantity: 50, usdInvested: 337.62 },
  // AXS2: 0,
};

async function fetchCurrencies() {
  const options = {
    interval: ["1d"], // 1d, 7d, 30d, 365d, ytd
    ids: Object.keys(PORTFOLIO),
    convert: "USD",
  };
  const [error, currencies] = await to(nomics.currenciesTicker(options));
  if (error) throw error;
  const currenciesWithPortfolioData = currencies.map((currency) => {
    const { id, price } = currency;
    const quantity = PORTFOLIO[id].quantity;
    const usdInvested = PORTFOLIO[id].usdInvested;
    return {
      ...currency,
      portfolioAmount: quantity,
      portfolioValue: quantity * price,
      profitable: quantity * price > usdInvested,
      profitDiff: quantity * price - usdInvested,
    };
  });
  const sortedCurrencies = orderBy(
    currenciesWithPortfolioData,
    SORT_BY,
    SORT_ORDER
  );
  console.log("sortedCurrencies", sortedCurrencies);
  return sortedCurrencies;
}

{
  /*
  <div class="nomics-ticker-widget" data-name="Axie Infinity" data-base="AXS2" data-quote="USD"></div>
  <script src="https://widget.nomics.com/embed.js"></script>
  */
}

export function formatNumber(price) {
  const adjustedPrice = price > 2 ? Math.floor(price) : price;
  const options = { maximumSignificantDigits: 20 };
  const formatter = new Intl.NumberFormat("en-US", options);
  const formattedPrice = formatter.format(adjustedPrice);
  return formattedPrice;
}

export function formatPrice(price) {
  const prefix = price < 0 ? "-$" : "$";
  return prefix + formatNumber(Math.abs(price));
}

export default function IndexPage() {
  const [currencies, setCurrencies] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  const portfolioTotal = React.useMemo(
    () => (currencies || []).reduce((total, c) => c.portfolioValue + total, 0),
    [currencies]
  );

  const refetchCurrencies = React.useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCurrencies()
      .then(setCurrencies)
      .catch((err) => setError(err?.message || err))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(refetchCurrencies, []);

  return (
    <div className="root">
      <header>
        <h1>Crypto Dash</h1>
        <button onClick={refetchCurrencies}>
          {" "}
          {loading ? "Loading" : "Refetch"}
        </button>
        {error && (
          <>
            <br />
            <small>{error}</small>
          </>
        )}
        <h2>
          Total
          <br />
          {formatPrice(portfolioTotal)}
        </h2>
      </header>

      <main>
        <ul>
          {currencies?.map(
            ({
              id,
              price,
              name,
              portfolioValue,
              portfolioAmount,
              profitable,
              profitDiff,
            }) => (
              <li key={id}>
                <h3>
                  {name}
                  <br />
                  <small>({id})</small>
                </h3>
                <h2>
                  {formatPrice(portfolioValue)}
                  <br />
                  <small
                    style={{
                      color: profitable ? "var(--success)" : "var(--error)",
                    }}
                  >
                    {formatPrice(Math.floor(profitDiff))}
                  </small>
                </h2>
                <small>{formatNumber(portfolioAmount)} total</small>
                <br />
                <small>{formatPrice(price)} per token</small>
              </li>
            )
          )}
        </ul>
      </main>

      <footer>
        <a href="https://nomics.com/">
          Crypto Market Cap & Pricing Data Provided By Nomics.
        </a>
      </footer>

      <style jsx>{`
        .root {
          padding: 10px 40px 0px 40px;
          margin: 20px 20px 0px 20px;
        }

        button {
          border: none;
          background: var(--accent);
          color: var(--foreground);
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
        }

        button:hover,
        button:active {
          background: var(--accent-active);
        }

        header h2 {
          text-align: center;
        }
        header small {
          color: var(--error);
        }
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          flex-wrap: wrap;
          grid-gap: 10px;
          list-style-type: none;
          padding: 0px;
        }
        li {
          background: var(--midground-1);
          padding: 5px 10px 20px 10px;
          border-radius: 5px;
          text-align: center;
        }
        li h2 {
          color: var(--foreground);
        }
        li h2 small {
          font-size: 16px;
        }
        li h2 small {
          color: var(--foreground);
        }
        li h3 {
          margin-top: 20px;
        }
        footer {
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
