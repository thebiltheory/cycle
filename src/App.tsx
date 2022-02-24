import { ThemeProvider } from './theme';
import Router from './routes';
import Shell from './components/Shell';

function App() {
  return (
    <ThemeProvider>
      <Shell>
        <Router />
      </Shell>
    </ThemeProvider>
  );
}

export default App;
