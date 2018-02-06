import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import HomeReducer from './Reducers/HomeReducer';

import {Home} from './Pages/Home/Home';

const title = "React input fields demo";

class App extends React.Component {

    render() {
    	let store = createStore(HomeReducer , {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
        	<Provider store={store} >
				<div>
					<div className="column is-half is-offset-one-quarter">
						<div className="title">{title}</div>
					</div>
				   <Home/>
				</div>
			</Provider>
        )
    }
}

ReactDOM.render(<App/>, app)
module.hot.accept();