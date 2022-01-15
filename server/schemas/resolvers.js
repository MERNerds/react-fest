const { AuthenticationError } = require('apollo-server-express');
const { User, Band, Tickets, Order } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('tickets')
          .populate('bands');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

  },

  Mutation: {
    //add user mutation
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW) {
        throw new AuthenticationError('Incorrect password');
      }
      return { token, user };
    }
  }
};

module.exports = resolvers