import React from 'react';
import { MicroAppWithMemoHistory } from 'umi';

export default () => {
  return (
    // <div>123</div>
    <MicroAppWithMemoHistory
      // sandbox={{ strictStyleIsolation: true, experimentalStyleIsolation: true }}
      name="grandson"
      // autoSetLoading={true}
      url="/jiji"
    />
  );
};
