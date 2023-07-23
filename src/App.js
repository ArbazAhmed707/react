import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Catagries from './components/Catagries';
import Acne_section from './components/Acne_section';

function App() {
  return (
    <>
<Header logo={true}/>
<Banner/>
<Gallery/>
<Catagries/>
<Acne_section/>
  </>
  );
}

export default App;