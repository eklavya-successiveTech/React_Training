import Link from 'next/link';
import PaginationControls from '../components/PaginationControls'; 

export default async function PaginationPage({ searchParams }) {
  const page = searchParams['page'] ?? '1';
  const per_page = '10';

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${per_page}`
  );
  const data = await res.json();

  const totalItems = res.headers.get('x-total-count');
  const totalPages = Math.ceil(Number(totalItems) / Number(per_page));

  const hasPrevPage = Number(page) > 1;
  const hasNextPage = Number(page) < totalPages;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Posts (Page {page})</h1>

      <div className='grid grid-cols-1 gap-4'>
        {data.map((post) => (
          <div key={post.id} className='p-4 border rounded-md shadow-sm'>
            <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
            <p className='text-gray-700'>{post.body}</p>
          </div>
        ))}
      </div>

      <PaginationControls
        currentPage={Number(page)}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </div>
  );
}