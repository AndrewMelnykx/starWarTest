import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "@api/axiosInstance";
import { delay } from "@helpers/helper-functions";

const fetchPeopleList = createAsyncThunk(
  "fetchPeopleListThunk",
  async (page: number) => {
    try {
      {
        const response = await instance.get(`/people/?page=${page}`);
        return response.data.results;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
);

const fetchRelatedMovies = createAsyncThunk(
  "fetchRelatedMoviesThunk",
  async (ids: number[]) => {
    const movies = [];
    try {
      for (const id of ids) {
        const response = await instance.get(`/films/${id}/`);
        movies.push(response.data);
        await delay(300);
      }
      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
);
const fetchRelatedStarships = createAsyncThunk(
  "fetchRelatedStarshipsThunk",
  async (ids: number[]) => {
    const starships = [];

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
