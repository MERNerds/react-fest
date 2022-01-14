const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Ticket, Band } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v')
            .populate('savedBands')
            .populate('orders')

            return userData;
        }

        throw new AuthenticationError('Not logged in'); 
      },
      users: async () => {
        return User.find()
          .select('-__v -password')
      },
      bands: async () => {
        return Band.find()
          .select('-__v')
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user }
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user }
      }
    }
  };
  
  module.exports = resolvers