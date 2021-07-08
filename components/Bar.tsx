import { memo } from 'react';

export default memo(
  (props) => {
    return <div>Bar</div>
  },
  () => {
    return true;
  },
);