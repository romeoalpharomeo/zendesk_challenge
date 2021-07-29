import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import ListTickets from './views/ListTickets';
import SingleTicket from './views/SingleTicket';

function App() {
  return (
    <div className="App">
      <Router data-testid="router" >
        <ListTickets path="/" />
        <SingleTicket path="/tickets/:id" />
      </Router>
    </div>
  );
}

export default App;
