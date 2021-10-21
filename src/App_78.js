import { Switch, Route } from 'react-router-dom';
import Homepage_78 from './pages/Homepage_78';
import ShopOverviewPage_78 from './pages/ShopOverviewPage_78';
import ContactPage_78 from './pages/ContactPage_78';
import SigninPage_78 from './pages/SigninPage_78';
import Header_78 from './components/Header_78';

import './App_78.scss';

function App_78() {
  return (
    <div>
      <Header_78 />
      <Switch>
      <Route exact path='/' component={Homepage_78} />
      <Route exact path='/shop_78' component={ShopOverviewPage_78} />
      <Route exact path='/contact_78' component={ContactPage_78} />
      <Route exact path='/signin_78' component={SigninPage_78} />
      </Switch>
    </div >
  );
}

export default App_78;

