import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from '../src/components/App/App'
import { Provider } from 'react-redux'
import { persistor, store} from '../src/redux/store'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <PersistGate persistor={persistor}>
        <App />
       </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
