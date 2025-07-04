import React, { useEffect } from 'react';

importGlobalApi from '../Services/GlobalApi';

function Slider() {
 
  useEffect(()=> {

    getTrendingMovies();

  },[]);

  const getTrendingMovies = () => {

    GlobalApi.getTrendingVideos.then(resp => {

        console.log(resp);

    });

  }

  return (
    <div>Slider</div>
  )
}

export default Slider;