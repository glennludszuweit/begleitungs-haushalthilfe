import Footer from './containers/Footer/Footer';
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
