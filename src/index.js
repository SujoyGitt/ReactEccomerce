import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import { AppProvider } from "./Context/Productcontext";
import { Filtercontextprovider } from "./Context/Filter_context";
import { Cartpovider } from "./Context/Cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-05p2yurtspo51pmw.us.auth0.com"
  clientId="8susk4PGhDrPN1Az5VfTLHadWSuJgfxF"
  authorizationParams={{redirect_uri: window.location.origin}}>
   <AppProvider>
     <Filtercontextprovider>
       <Cartpovider>
        <App />
       </Cartpovider>
     </Filtercontextprovider>
   </AppProvider>
  </Auth0Provider>
);
