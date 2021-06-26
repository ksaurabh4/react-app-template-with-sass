
import { BrowserRouter, Route, Link } from "react-router-dom";
import {SignInScreen,RegisterScreen,HomeScreen} from ''

const App=()=> {
  
  return (
    <BrowserRouter>
    <Route path="/signin" component={SignInScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
    </BrowserRouter>
  );
}

export default App;
