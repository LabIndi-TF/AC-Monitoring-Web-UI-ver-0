import './App.css';
import {TableEvent, TableParameter, TableStatus} from './components/Level-1'
import {HomePage, LoginPage, EventPage} from './pages';

function App() {
  return (
    <div className="App">
        <LoginPage/>
        <TableEvent/>
        <TableParameter/>
        <TableStatus/>
        <HomePage/>
        <EventPage/>
    </div>
  )
}

export default App;
