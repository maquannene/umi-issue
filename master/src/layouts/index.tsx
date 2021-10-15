import React from 'react';
import { Link } from 'umi';

export default (props: any) => {
  return (
    <div>
      <div>
        <Link to={'/'}>
          <button>Master</button>
        </Link>
        <Link to={'/slave'}>
          <button>Slave</button>
        </Link>
        <Link to={'/slave/grandson'}>
          <button>Slave(GrandSon)</button>
        </Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
