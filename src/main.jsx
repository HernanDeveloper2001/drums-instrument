import React from 'react';
import ReactDOM from 'react-dom/client';
import Battery from './Battery';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { DataProvider } from './context/DataProvider';
import { DataVolume } from './context/DataVolume';
import { DataButtonPower } from './context/valueButtonPower';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider >
        <DataVolume>
          <DataButtonPower>
            <Battery />
          </DataButtonPower>
        </DataVolume>
      </DataProvider>
    </Provider>
  </React.StrictMode>,
)
