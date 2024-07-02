import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchAPI from '../components/FetchAPI'

function Home() {
  return (
    <div className="container">
      <h1 className="display-4">Home</h1>
      <p className="lead">Welcome to the home page!</p>
      <img src={logo} className="App-logo" alt="logo" />

      <FetchAPI />
    </div>
  );
}

export default Home;
