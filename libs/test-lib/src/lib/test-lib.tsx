import styles from './test-lib.module.scss';

/* eslint-disable-next-line */
export interface TestLibProps {}

export function TestLib(props: TestLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestLib!</h1>
    </div>
  );
}

export default TestLib;
