import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@api/axiosInstance";
import { delay } from "@helpers/helper-functions";
import { Person, Film, Starship } from "@store/types";

const fetchPeopleList = createAsyncThunk<Person[], number>(
  "fetchPeopleListThunk",
  async (page) => {
    try {
      const response = await instance.get(`/people/?page=${page}`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

const fetchRelatedMovies = createAsyncThunk<Film[], number[]>(
  "fetchRelatedMoviesThunk",
  async (ids) => {
    const movies: Film[] = [];
    try {
      for (const id of ids) {
        const response = await instance.get(`/films/${id}/`);
        movies.push(response.data);
        await delay(300);
      }
      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  }
);

const fetchRelatedStarships = createAsyncThunk<Starship[], number[]>(
  "fetchRelatedStarshipsThunk",
  async (ids) => {
    const starships: Starship[] = [];
    for (let i = 0; i < ids.length; i++) {
      await delay(300);
      try {
        const response = await instance.get(`/starships/${ids[i]}/`);
        starships.push(response.data);
      } catch (error) {
        console.error(`Error fetching starship with ID ${ids[i]}:`, error);
      }
    }
    return starships;
  }
);

export { fetchPeopleList, fetchRelatedMovies, fetchRelatedStarships };
