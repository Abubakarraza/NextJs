import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Data = () => {
  const [quo, setquo] = useState('');
  const router = useRouter();
  const param = router.query.data;
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    const data = result.find((curElem) => curElem.id == param);
    setquo(data);
    console.log(quo);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      {quo.id}
      <h1>{quo.title}</h1>
      <h2>{quo.body}</h2>
    </div>
  );
};

export default Data;
