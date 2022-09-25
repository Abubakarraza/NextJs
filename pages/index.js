import Head from 'next/head';
import Layout from '../src/components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Bis Resume</title>
          <meta name="description" content="Bis Resume" />
        </Head>

        <div>
          <h1>Bis Resume</h1>
        </div>
      </div>
    </Layout>
  );
}
