'use client';

import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import FormOutput from '@/components/form-output';
import { LoadingButton } from '@/components/loading-button';
import { trpc } from '@/utils/trpc';
import toast from 'react-hot-toast';

export default function LogoutForm() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  type LogoutUserOutput = /*unresolved*/ any
  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const { reset, handleSubmit } = methods;

  const { mutate: logoutFn } = trpc.logoutUser.useMutation({
    onSettled() {
      setSubmitting(false);
    },
    onMutate() {
      setSubmitting(true);
    },
    onError(error) {
      toast.error(error.message);
      console.log('Error message:', error.message);
      reset({ password: '' });
    },
    onSuccess() {
      toast.success('logout successfully');
      router.push('/');
    },
  });

  const onSubmitHandler: SubmitHandler<LogoutUserOutput> = (values) => {
    logoutFn(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className='max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5'
      >
        <FormOutput label='Email' name='email' type='email' />
        <FormOutput label='Password' name='password' type='password' />

        <div className='text-right'>
          <Link href='#' className=''>
            Forgot Password?
          </Link>
        </div>
        <LoadingButton loading={submitting} textColor='text-ct-gray-600'>
          Logout
        </LoadingButton>
        
      </form>
    </FormProvider>
  );
}
