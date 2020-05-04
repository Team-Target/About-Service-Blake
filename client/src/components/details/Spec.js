import React from 'react';

const Spec = ({spec}) => {
  return (
    <div className='spec'>
      <b>{spec.key + ': '}</b>{spec.value}
    </div>
  )
}

export default Spec;