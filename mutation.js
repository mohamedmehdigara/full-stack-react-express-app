const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addBook: {
            type: BookType,
            args: {
                name: {type : new GraphQLNonNull(GraphQLString)},
                genre: {type : GraphQLString},
            },
            resolve(parent , args){
                const book = new Book({name: args.name , genre: args.genre})
                return book.save(); // replace with your database call
            }
        }
    }
})