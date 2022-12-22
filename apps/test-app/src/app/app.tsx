// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {TestLib} from 'test-lib';

export function App() {
  return (
    <>
      <NxWelcome title="test-app" />
      <TestLib/>
      <div />
    </>
  );
}

export default App;
