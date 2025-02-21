import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/layout';
import ThemeProvider from './contextProvider';
function App() {
  return ( //nesting component
    <ThemeProvider>
    <Layout/>
    </ThemeProvider>
  );
}

export default App;
