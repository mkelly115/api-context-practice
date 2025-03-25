import './App.css';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';

 export default function App(){ 

  return (
<ThemeProvider>
  <ContentComponent />
</ThemeProvider>
  )
}

