const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    },

    Mutation: {
      //add user mutation
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      
      login: async () => {

      }
  }
};
  
  module.exports = resolvers