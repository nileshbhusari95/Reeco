import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from '../src/store';
import Orders from '../src/Orders';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/company">Reeco</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/store">Store</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/orders">Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/analytics">Analytics</Link>
                  </li>
                </ul>
              </div>
              <div className="cart-icon-container">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/company" render={() => <div>Company Component</div>} />
            <Route path="/store" render={() => <div>Store Component</div>} />
            <Route path="/orders" render={() => <Orders />} />
            <Route path="/analytics" render={() => <div>Analytics Component</div>} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
