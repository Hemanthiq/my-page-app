import Header from '@/components/header';
import LoginForm from './login-form';

export default async function LoginPage() {
  return (
    <>
      <Header />
      <section className='bg-ct-gray-600 min-h-screen grid place-items-center'>
        <div className='w-full'>
          <h1 className='text-4xl lg:text-6xl text-center font-[600] text-ct-gray-500 mb-4'>
            Welcome Back
          </h1>
          <h2 className='text-lg text-center mb-4 text-ct-dark-400'>
            Login to have access
          </h2>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
