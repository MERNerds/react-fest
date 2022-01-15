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
// import { Provider } from 'react-redux';
import { setContext } from '@apollo/client/link/context';

//import components
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
//import Nav from './components/Nav';
import 'devextreme/dist/css/dx.light.css';

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Provider> */}
          <Nav />
          <Switch>  
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path='/tickets' component={Pricing} />
            <Route exact path="/myschedule" component={Schedule} />
            {/* <Route exact path="/myschedule" component={MySchedule} />  */}
            {/* <Route exact path="/info" component={Info} */}
          </Switch>
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
