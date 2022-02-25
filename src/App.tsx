import { ThemeProvider } from './theme';

import Shell from './components/Shell';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Shell>
          <Router />
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
