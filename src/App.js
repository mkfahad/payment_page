import './App.css';
import Header from './Components/Header';
import Footer from './Components/footer';
import PaymentDetails from './Components/PaymentDetails';
import SideBar from './Components/SideBar';
import PaymentInfo from './Pages/PaymentInfo';
function App() {
  return (
    <div className="App">
       <Header />
       <PaymentInfo />
       <Footer />
    </div>
  );
}

export default App;
