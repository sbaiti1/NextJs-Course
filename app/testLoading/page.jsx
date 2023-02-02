
import React, { Suspense } from 'react';
import UserProfile from './UserProfile';
// const UserProfile = React.lazy(() => import('./UserProfile'));

function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}

export default Page;
