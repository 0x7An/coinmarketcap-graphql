const axios = require('axios');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const CoinType = new GraphQLObjectType({
    name: 'Coin',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        symbol: { type: GraphQLString },
        rank: { type: GraphQLString },
        price_usd: { type: GraphQLString },
        price_btc: { type: GraphQLString },
        h24_volume_usd: { type: GraphQLString },
        market_cap_usd: { type: GraphQLString },
        available_supply: { type: GraphQLString },
        total_supply: { type: GraphQLString },
        percent_change_1h: { type: GraphQLString },
        percent_change_24h: { type: GraphQLString },
        percent_change_7d: { type: GraphQLString }
    }
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        coins: {
            type: new GraphQLList(CoinType),
            args: {
                id: { type: GraphQLString }
            },
            resolve(_, {id}) {
                const url = id
                    ? `https://api.coinmarketcap.com/v1/ticker/${id}`
                    : 'https://api.coinmarketcap.com/v1/ticker/';
                return axios.get(url).then(
                    res => res.data
                ).catch(
                    error => console.log('error', error)
                );
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});;
