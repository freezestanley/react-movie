import React from 'react';
import Card from './index';

export default function TopupNote(props) {
  return props.nodes && (
    <Card title="充值说明">
      <div className="topup__note" dangerouslySetInnerHTML={{ __html: props.nodes }} />
    </Card>
  )
}