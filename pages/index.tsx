import React from 'react';
import styles from './index.less';
import Foo from '../components/Foo';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index 2</h1>
      <Foo />
    </div>
  );
}
