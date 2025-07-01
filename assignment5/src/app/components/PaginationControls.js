// components/PaginationControls.js
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function PaginationControls({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePrev = () => {
    router.push(`/question4?page=${currentPage - 1}`);
  };

  const handleNext = () => {
    router.push(`/question4?page=${currentPage + 1}`);
  };

  return (
    <div className='flex justify-center items-center gap-4 mt-8'>
      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
        disabled={!hasPrevPage}
        onClick={handlePrev}
      >
        Previous
      </button>

      <div className='text-lg'>
        Page {currentPage} of {totalPages}
      </div>

      <button
        className='bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
        disabled={!hasNextPage}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}