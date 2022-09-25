import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../src/components/Header';
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    return {
      props: {
        result,
      },
    };
  } catch (error) {}
};
const Contact = ({ result }) => {
  const hel = 1222;
  console.log(result);
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Hello this is Contact page</h1>
      {result.slice(7, 12).map((ele) => {
        return (
          <>
            <Link href={`/home/${ele.id}`}>
              <h1>{ele.title}</h1>
            </Link>
          </>
        );
      })}
      <Link href={`${hel}`}>1222</Link>
      <Header />
      <Image
        src="https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        height={500}
        width={500}
      />
    </div>
  );
};

export default Contact;
