import { memo } from 'react';
import styles from './Foo.less';
import Bar from "./Bar";

export default memo(
  (props) => {
    return <div className={styles.a}>
      <div>Foo</div>
      <Bar />
    </div>
  },
  () => {
    return true;
  },
);