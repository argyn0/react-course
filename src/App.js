import { useSelector, useDispatch } from 'react-redux';
import {minecraftGetMobsAction} from './store/creators/minecraftCreators'
import './App.css';

function App() {
  const selector = useSelector((s) => s.minecraftReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <span>{selector.mobs}</span>
      <button onClick={() => dispatch(minecraftGetMobsAction(["criper", "steave", "zombie"]))}>get mobs</button>
    </div>
  );
}

export default App;
