import React from 'react';
import styles from './index.less';
import Foo from '../components/Foo';
import Dar from "../components/Dar";

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index 2333443</h1>
      <Foo />
      <Dar />
    </div>
  );
}
