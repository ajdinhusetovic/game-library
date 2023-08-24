import { useQuery } from 'react-query';
import { AnimatedPage } from '../../components/navbar/AnimatedPage';
import axios from 'axios';
import { useState } from 'react';
import { Spinner } from '../../components/navbar/Spinner';
import { GameCard } from '../../components/navbar/GameCard';
import '../../scss/browse.scss'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

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
      <div className='game-container'>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {data.map(game => (
              <>
                <GameCard game={game} />
              </>
            ))}
            <div className='page-btns'>
              <button onClick={handlePreviousPage}><GrFormPrevious /></button>
              <button onClick={handleNextPage}><GrFormNext /></button>
            </div>
          </>
        )}
      </div>
    </AnimatedPage>
  );
};
