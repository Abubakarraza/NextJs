import { useRouter } from 'next/router';

const PageNo = () => {
  const router = useRouter();

  const pageNo = router.query.pageNo;
  return <div>{pageNo}</div>;
};

export default PageNo;
