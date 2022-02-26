import { ThemeProvider } from './theme';

import Shell from './components/Shell';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import UIStateProvider from './state/providers/ui.provider';

function App() {
  return (
    <UIStateProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Shell>
            <Router />
          </Shell>
        </BrowserRouter>
      </ThemeProvider>
    </UIStateProvider>
  );
}

export default App;
