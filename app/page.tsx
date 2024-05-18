import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';
import UserInfo from './user-info';
import { SessionProvider } from 'next-auth/react';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { users, newOffset } = await getUsers(search, Number(offset));

  return (
    <SessionProvider>
      <main className="flex flex-1 flex-col p-4 md:p-6">
        <div className="flex items-center mb-8">
          <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
        </div>
        <div className="w-full mb-4 flex flex-row gap-4">
          <UserInfo />

          <div className="w-full">
            <Search value={searchParams.q} />
          </div>
        </div>
        <UsersTable users={users} offset={newOffset} />
      </main>
    </SessionProvider>
  );
}
