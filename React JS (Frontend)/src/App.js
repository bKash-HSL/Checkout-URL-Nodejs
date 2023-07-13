import BkashAPICall from "./action/BkashAPICall";
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import Success from "./components/Success";
import Fail from "./components/Fail";

function App() {
  return (
    <div className="App">
      <Router>
<button onClick={BkashAPICall}>Pay With bKash</button>
<Routes>
   <Route path="/success" element={<Success/>} ></Route>
   <Route path="/fail" element={<Fail/>} ></Route>
</Routes>

</Router>

    </div>
  );
}

export default App;
