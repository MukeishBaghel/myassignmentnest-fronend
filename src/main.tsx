import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/Store.ts'
import { ErrorBoundary } from 'react-error-boundary'
import NotFound from './pages/NotFound.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<><NotFound /></>}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ErrorBoundary>
)
