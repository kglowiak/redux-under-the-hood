import React from "react";
import "./styles.css";
import { useDispatch } from './redux/useDispatch';
import { useSelector } from './redux/useSelector';

import { addData } from './actions';
import { selectData } from './selectors';


export default function App() {
  const dispatch = useDispatch();
  const handler = () => dispatch(addData('test'));
  const data = useSelector(selectData);
  
  return (
    <div className="App">
    <button onClick={handler}>Add data</button>
    <ul>
      {data && data.map(d => <li>{d}</li>)}
    </ul>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
