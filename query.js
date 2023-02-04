const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id:{type: GraphQLID}},
            resolve (parent ,args){
                return Book.findById(args.id) // Replace with your own database query
            }
        },
        books:{
            type: new GraphQLList(BookType),
            args:{id:{type: GraphQLID}},
            resolve (parent ,args){
                return Book.find() // Replace with your own database query
            }
        }
    }
})