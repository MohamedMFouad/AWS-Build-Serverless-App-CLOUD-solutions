import React from 'react';
import Amplify from "aws-amplify";
import awsconfig from './aws-exports'

import { withAuthenticator  } from 'aws-amplify-react'

function App() {
  return (
          <div>e-commerce</div>
  );
}
Amplify.configure(awsconfig)

export default withAuthenticator(App , {includeGreetings: true});
