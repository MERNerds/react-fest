import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  // useQuery,
  // gql
} from "@apollo/client";
import { Provider } from 'react-redux';
import store from './app/store';
import { setContext } from '@apollo/client/link/context';

//adding font 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import 'devextreme/dist/css/dx.light.css';

//import components
import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import Success from './pages/Success';
import LineUp from './components/Lineup';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  //creating theme for font 
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Mochiy Pop P One',
        'sans-serif'
      ].join(','),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: [
              'Mochiy Pop P One',
              'sans-serif'
            ].join(','),
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            fontFamily: [
              'Mochiy Pop P One',
              'sans-serif'
            ].join(','),
          }
        }
      }
    }})
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Nav />
              <CssBaseline />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/lineup" component={LineUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path='/tickets' component={Pricing} />
                <Route exact path="/myschedule" component={Schedule} />
                <Route exact path='/success' component={Success} />
              </Switch>
              <Footer />
            </Provider>
          </ThemeProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
