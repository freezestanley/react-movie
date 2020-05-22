import React, { useState } from 'react';
import SpecGroup from '../SpecGroup';
import OpenVIP from '../OpenVIP';

export default function SpecAndVIP({ onOpenVIP, ...rest }) {
  const [isOpenVIP, setOpenVIP] = useState(false);
  const handleOpenVIP = (e) => {
    setOpenVIP(e);
    onOpenVIP && onOpenVIP(e);
  }
  return (
    <div>
      <SpecGroup {...rest} isOpenVIP={isOpenVIP} />
      <OpenVIP {...rest} onChange={handleOpenVIP} />
    </div>
  )
}