import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ErrorPage = () => {
  const router = useRouter();
  //   const goHome = () => {
  //     router.push('/');
  //   };
  //   setTimeout(() => {
  //     goHome();
  //   }, 3000);
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <>
      <button onClick={() => router.push('/')}>404</button>
    </>
  );
};

export default ErrorPage;
