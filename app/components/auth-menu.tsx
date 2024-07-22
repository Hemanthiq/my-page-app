'use client';

import queryClient from '@/utils/query-client';
import { trpc } from '@/utils/trpc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast, { Renderable, Toast, ValueFunction } from 'react-hot-toast';

export default function AuthMenu() {
  const router = useRouter();
  

  const { mutate: logoutFn } = trpc.logoutUser.useMutation({
    onError(error: { message: Renderable | ValueFunction<Renderable, Toast>; }) {
      toast.error(error.message);
      console.log('Error message:', error.message);
    },
    onSuccess() {
      queryClient.clear();
      toast.success('logout successful');
      router.push('/login');
    },
  });

  return (
    <>
      <li>
        <Link href='/profile' className='text-ct-dark-600'>
          Profile
        </Link>
      </li>
      <li className='cursor-pointer' onClick={() => logoutFn()}>
        Logout
      </li>
    </>
  );
}
