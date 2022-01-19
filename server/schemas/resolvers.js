const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Ticket, Band } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById({ _id: context.user._id }).populate({
            path: 'orders.tickets'
          });
          
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate)

            return user;
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
      },
      tickets: async (parent, { ticketName }) => {
        const params = {};

        if (ticketName) {
          params.ticketName = {
            $regex: ticketName
          };
        }

        return await Ticket.find(params)
      },
      ticket: async (parent, { _id }) => {
        return await Ticket.findById(_id)
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id ).populate({
            path: 'orders.tickets'
          });

          return user.orders.id(_id);
        }

        throw new AuthenticationError('Not logged in')
      },
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
  
        const order = new Order({ tickets: args.tickets });
        const { tickets } = await order.populate('tickets').execPopulate();
  
        const line_items = [];
  
        for (let i = 0; i < tickets.length; i++) {
          // generate product id
          const ticket = await stripe.products.create({
            name: tickets[i].ticketName,
            description: tickets[i].description1,
            // images: [`${url}/images/${products[i].image}`]
          });
  
          // generate price id using the product id
          const price = await stripe.prices.create({
            product: ticket.id,
            unit_amount: tickets[i].price * 100,
            currency: 'usd',
          });
  
          // add price id to the line items array
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
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
      },
      addOrder: async (parent, { tickets }, context) => {
        console.log(context);

        if(context.user) {
          const order = new Order({ tickets });

          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

          return order;
        }

        throw new AuthenticationError('Not logged in');
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }

        throw new AuthenticationError('Not logged in');
      }
    },

  };

module.exports = resolvers