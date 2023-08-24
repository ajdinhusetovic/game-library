import { useQuery } from 'react-query';
import { AnimatedPage } from '../../components/navbar/AnimatedPage';
import axios from 'axios';
import { useState } from 'react';
import { Spinner } from '../../components/navbar/Spinner';
import { GameCard } from '../../components/navbar/GameCard';
import '../../scss/browse.scss'
import { GrFormPrevious, GrFormNext } from "react-icons/gr"

export const Browse = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const [upperPrice, setUpperPrice] = useState(50)
  const [lowerPrice, setLowerPrice] = useState(0)

  const { data, isLoading, refetch } = useQuery(['game', pageNumber], () => {
    return axios.get(`https://www.cheapshark.com/api/1.0/deals?pageNumber=${pageNumber}&lowerPrice=${lowerPrice}&upperPrice=${upperPrice}`)
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

  const applyFilters = () => {
    refetch()
  }

  const resetFilters = () => {
    setLowerPrice(0)
    setUpperPrice(50)
    refetch()
  }

  return (
    <AnimatedPage>
      <div className='filters'>
        <div className='input-filters-wrapper'>
          <label>Min price</label>
          <input type="number" value={lowerPrice} onChange={(e) => setLowerPrice(e.target.value)} />
          <label> Max price</label>
          <input type="number" value={upperPrice} onChange={(e) => setUpperPrice(e.target.value)} />
        </div>
        <div className='filter-buttons-wrapper'>
          <button onClick={applyFilters}>apply</button>
          <button onClick={resetFilters}>reset</button>
        </div>
      </div>
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
