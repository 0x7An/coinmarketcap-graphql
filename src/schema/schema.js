const graphql = require('graphql');
const axios =require('axios'); 

const{
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString, 
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: ()=> ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        github : { type: GraphQLString },
        symbol: { type: GraphQLString },
        avatar: { type: GraphQLString }
    })
});

const CurrencyType = new GraphQLObjectType({
    name: 'Goal',
    fields: ()=> ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        baseline: { type: GraphQLString },
        objective: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        project:{
        type: ProjectType, 
        args: { id: { type: GraphQLString } },
        resolve(parentValue, args) {
            return axios.get(`http://localhost:3000/projects/${args.id}`)
            .then(resp => resp.data);
        }},
        currency :{
            type: CurrencyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args){
              return axios.get(`http://localhost:3000/currencies/${args.id}`)
              .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation
});