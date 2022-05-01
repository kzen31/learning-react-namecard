import './App.css';

import Foto from './components/Foto';
import Text from './components/Text';
import Button from './components/Button';
import Detail from './components/Detail';
import Logo from './components/Logo';

function App() {
  return (
    <main className='card'>
      <Foto />
      <Text />
      <Button />
      <Detail />
      <Logo />
    </main>
  );
}

export default App;
