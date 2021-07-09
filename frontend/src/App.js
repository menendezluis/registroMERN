import Formulario from './components/Formulario'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registros from './components/Registros'

function App() {
  return(
    <Router>
      <Switch>
          <Route exact path="/">
           <Formulario />
          </Route>
          <Route path="/inscritos">
            <Registros />
          </Route>
        </Switch>
    
    </Router>
  )
}

export default App;
