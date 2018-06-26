# GraphQL
Graph layer on top of CoinmarketCap

## Getting Started
- `yarn`
- `yarn start`
Go to: `http://localhost:4000/graphql`

# Query example
`{
  coins(id: "bitcoin") {
    id,
    name,
    symbol,
    rank,
    price_usd,
    price_btc,
    h24_volume_usd,
    market_cap_usd,
    available_supply,
    total_supply,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  }
}`