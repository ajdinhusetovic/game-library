import { useQuery } from 'react-query';
import { AnimatedPage } from '../../components/navbar/AnimatedPage';
import axios from 'axios';
import { useState } from 'react';
import { Spinner } from '../../components/navbar/Spinner';

export const Browse = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, refetch } = useQuery(['game', pageNumber], () => {
    return axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}`)
      .then((res) => res.data);
  });

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
    refetch();
  };

  const handlePreviousPage = () => {
    if (pageNumber === 0) {
      return
    } else {
      setPageNumber(pageNumber - 1)
      refetch();
    }
  };

  return (
    <AnimatedPage>
      <div className='container'>
        <button onClick={handleNextPage}>Next Page</button>
        <button onClick={handlePreviousPage}>prev Page</button>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {data.map(item => (
              <>
                <h1>{item.title}</h1>
              </>
            ))}
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};
