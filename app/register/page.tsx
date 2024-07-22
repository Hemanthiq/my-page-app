import Header from '@/components/header';
import RegisterForm from './register-form';

export default async function RegisterPage() {
  return (
    <>
      <Header />
      <section className='py-8 bg-ct-gray-600 min-h-screen grid place-items-center'>
        <div className='w-full'>
          <h1 className='text-4xl xl:text-6xl text-center font-[600] text-ct-gray-800 mb-4'>
            Welcome to H!
          </h1>
          <h2 className='text-lg text-center mb-4 text-ct-dark-400'>
            Sign Up To Get Started!
          </h2>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
