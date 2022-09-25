import Image from 'next/image';
import Link from 'next/link';
import styles from '.././styles/components/About.module.css';
export default function About() {
  return (
    <>
      {/* <div className={`${styles.mainHeading} ${styles.textColor}`}> */}
      <div>
        helo thid
        <Link href="/6576">About</Link>
      </div>
      <h1 style={{ color: 'rebeccapurple' }}>Hello this is About Page</h1>
      <Image src={'/img.jpg'} height="500" width="700" layout="intrinsic" />

      <style jsx>{`
        div {
          color: green;
          font-size: 30px;
        }
      `}</style>
    </>
  );
}
