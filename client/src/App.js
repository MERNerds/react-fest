import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js';
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
import SignUp from './pages/SignUp';

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
          <Provider>
            <Nav />
            <Routes>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Routes>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
    // <ApolloProvider client={client}>
    //   <Router>
    //     <div>
    //       {/* <Provider > */}
    //       {/* <Nav /> */}
    //       <Routes>  
    //         {/* <Route exact path="/" component={Home} /> */}
    //         <Route exact path="/login" component={Login} />
    //         <Route exact path="/signup" component={SignUp} />
    //         {/* <Route exact path="/myschedule" component={MySchedule} />  */}
    //         {/* <Route exact path="/info" component={Info} */}
    //       </Routes>
    //       {/* </Provider> */}
    //     </div>
    //   </Router>
    // </ApolloProvider>

  );
}

export default App;
