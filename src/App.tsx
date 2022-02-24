import { ThemeProvider } from './theme';
import Router from './routes/Router';
import Shell from './components/Shell/Shell';

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
