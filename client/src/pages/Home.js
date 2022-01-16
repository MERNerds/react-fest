import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_BANDS, QUERY_USERS, QUERY_TICKETS } from "../utils/queries";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from '../components/Cart';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TICKETS);
  const tickets = data?.tickets || [];
  console.log(tickets);
  return (
    <div className="container">
      {/* <Lineup />
      <Tickets />
      <Cart /> */}
    </div>
  );
};

export default Home;
