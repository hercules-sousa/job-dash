'use client';

import { useSession } from 'next-auth/react';
import { Button } from '../components/ui/button';

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Button onClick={() => console.log(session)}> Data</Button>
    </div>
  );
};

export default UserInfo;
