import React from 'react';
import useFetch from './useFetch';
import { useQuery } from '@tanstack/react-query';

export default function Joke() {
  // const {data: joke, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/jokes/random');
  const {data: joke, isLoading, isError, error, isSuccess} = useQuery({queryKey: ['joke'], queryFn: fetchJoke, staleTime: 6000, refetchOnWindowFocus: false });

  function fetchJoke() {
    return fetch("https://official-joke-api.appspot.com/jokes/random").then(response => response.json());
  }

  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>{joke.setup + ' ' + joke.punchline}</div>}
      {isError && <div>{error.message}</div>}
    </div>
  );
}
