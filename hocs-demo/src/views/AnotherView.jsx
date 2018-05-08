import React from 'react';

import { withHeader } from '../hocs/withHeader';

function AnotherView() {
  return (
    <div>
      Another Another
    </div>
  )
}

export default withHeader(AnotherView);