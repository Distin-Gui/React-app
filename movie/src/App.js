import Movie from './Components/home/Movie'
import SearchArea from './Components/SearchArea'
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <SearchArea />
        <Movie/>
    </Provider>
      
    
  );
}


export default App;
