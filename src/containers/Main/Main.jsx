import { Route, Switch } from 'react-router';
import ScrollToTop from '../../Helpers/ScrollToTop';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Impressum from '../../pages/Impressum/Impressum';
import Service from '../../pages/Services/Service/Service';
import Services from '../../pages/Services/Services';
import {} from './styles';

function Main() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path='/impressum' component={Impressum} />
        <Route path='/kontakt' component={Contact} />
        <Route path='/dienstleistungen/:name' component={Service} />
        <Route path='/dienstleistungen' component={Services} />
        <Route path='/uber-uns' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default Main;
