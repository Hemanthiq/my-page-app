import Header from '@/components/header';
import LogoutForm from './logout-form';

export default async function LogoutPage() {
  return (
    <>
      <Header />
      <section className='bg-ct-gray-600 min-h-screen grid place-items-center'>
        <div className='w-full'>
          <h1 className='text-4xl lg:text-6xl text-center font-[600] text-ct-gray-500 mb-4'>
            Welcome 
          </h1>
          <h2 className='text-lg text-center mb-4 text-ct-dark-400'>
            Logout
          </h2>
          <LogoutForm />
        </div>
      </section>
    </>
  );
}
