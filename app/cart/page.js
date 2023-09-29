import { cookies } from 'next/headers';

const cookieStore = cookies();
const data = cookieStore.get('shopingCart');
export default function cartPage() {
  console.log(data);
  return (
    <>
      <h1>Yor Itmes </h1>
      <div>
        <p>{data} </p>
      </div>
      <h3>Yor Total </h3>
    </>
  );
}
