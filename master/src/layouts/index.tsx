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
          <button>Master {'>'} Slave</button>
        </Link>
        <Link to={'/grandson'}>
          <button>Master {'>'} GrandSon</button>
        </Link>
        <Link to={'/slave/sonjiji'}>
          <button>Master {'>'} Slave(GrandSon/jiji)</button>
        </Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
