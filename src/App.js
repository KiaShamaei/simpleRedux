import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import { increment } from './redux/actions';

function App() {
  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state=>state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
   <p>this my app{counter}</p>
   <button onClick={()=>dispatch(increment(5))}>
     add
   </button>

   {isLogged ? <p>somthing sensible here</p> :  <p>please logged in </p>}
    </div>
  );
}

export default App;
