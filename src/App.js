// import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import ProductList from "./components/ProductList";
// import BacaSurah from "./components/BacaSurah";

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <div className="columns">
//           <div className="column is-half is-offset-one-quarter">
//             <Switch>
//               <Route exact path="/">
//                 <ProductList />
//               </Route>
//               <Route exact path="/baca/:id">
//                 <BacaSurah />
//               </Route>

//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { Component } from 'react';

import Header from './pages/header';
import Content from './pages/content';
import Footer from './pages/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;