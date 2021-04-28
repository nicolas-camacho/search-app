import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import { Search, Item } from "./pages";
import { SearchBar } from "./components";

export default function App() {
  const [ searched, setSearched ] = useState("");
  const [ items, setItems ] = useState([]);
  const history = useHistory();

  const getItems = async () => {
    const data = await fetch(`http://localhost:8080/api/items?q=${searched}`)
      .catch(error => console.log(error.message));

    if(data && data.ok) {
      let newItems = await data.json().items
      setItems(newItems)
    }

    history.push(`/items?search=${searched}`);
  }

  return (
    <Router>
        <SearchBar 
          searched={searched}  
          setSearched={setSearched} 
          searchFunction={getItems}
        />
        <Switch>
          <Route path={`/items?search=${searched}`}>
            <Search items={items} />
          </Route>
          <Route path="/items/:id">
            <Item />
          </Route>
          <Route path="/">
            <></>
          </Route>
        </Switch>
    </Router>
  );
}