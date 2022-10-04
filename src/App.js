import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { 
  HomeCollection 
} from './ui-components';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.attributes.email}</h1>
          <button onClick={signOut}>Sign out</button>
          <HomeCollection />
        </main>
      )}
    </Authenticator>
  );
}