import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

const App = () => {
    //fetch /api/coins and display data
    const [state, setState] = useState([])
    const handleClick = (e) => {
        axios.get('/api/coins')
        .then(({data}) => {
        console.log(data);
        setState(data.data);
        });
    };
    const top20 = (e) => {
        axios.get('/api/top20')
        .then(({data}) => {
        console.log(data);
        setState(data.data);
        });
    };
    const top100 = (e) => {
        axios.get('/api/top100')
        .then(({data}) => {
        console.log(data);
        setState(data.data);
        });
    };
    const inactive = (e) => {
        axios.get('/api/inactivecoins')
        .then(({data}) => {
        console.log(data);
        setState(data.data);
        });
    };
    return(
    <div>
        <h1>Crypto!!</h1>
        <button onClick={handleClick}>Click for top 10!</button>
        <button onClick={top20}>Click here for top 20!</button>
        <button onClick={top100}>Click here for top 100!</button>
        <button onClick={inactive}>Click here for inactive coins!</button>
        { state && <div>{state.map( d => <div key={d.id}>{d.name}, {d.symbol}, {d.rank}</div>)}</div>}
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
