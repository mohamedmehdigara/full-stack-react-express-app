const graphql = require('graphql');

const {GraphQLObjectType , GraphQLSchema ,GraphQLString ,GraphQLID, GraphQLInt ,GraphQLList , GraphQLNonNull} =graphql;


const BookType = new GraphQLObjectType({
    name: 'Book' ,
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        genre: { type: GraphQLString}
    })
})