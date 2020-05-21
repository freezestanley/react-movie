import React from 'react';
import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

export default function SpecAndVIP(props) {
  return (
    <div>
      <SpecGroup {...props} />
      <OpenVIP {...props} />
    </div>
  )
}