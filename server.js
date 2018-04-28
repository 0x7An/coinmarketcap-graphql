const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./src/schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Leanit GraphQL server running on port ${PORT}`);

});