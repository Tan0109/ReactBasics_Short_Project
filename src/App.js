import {Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';

function App()
{
  return (
    <>
    <Route path = "/" exact component = {HomePage}/>
    <Route path = "/ContactPage" exact component = {ContactPage}/>
    </>
  );
}

export default App;