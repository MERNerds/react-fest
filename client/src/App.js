import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
  // useQuery,
   gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import Home from './components/Home';
//import Nav from './components/Nav';

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

// function App() {
//   return (

//      <ApolloProvider client={client}>
//       // <Router>
//         <div>
//           {/* <Provider> */}
//           {/* <Nav />
//           <Switch>   */}
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/login" component={Login} />
//             <Route exact path="/signup" component={SignUp} />
//             <Route exact path="/myschedule" component={MySchedule} />  */}
//             {/* <Route exact path="/info" component={Info} */}
//           {/* </Switch>
//           </Provider> */}
//         </div>
//       // {/* </Router> */}
//     // </ApolloProvider>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//          >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Provider> */}
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
