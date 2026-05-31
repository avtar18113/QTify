import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  const res = await axios.get(`${BASE_URL}/albums/top`);
  return res.data;
};

export const fetchNewAlbums = async () => {
  const res = await axios.get(`${BASE_URL}/albums/new`);
  return res.data;
};

export const fetchSongs = async () => {
  const res = await axios.get(`${BASE_URL}/songs`);
  return res.data;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genres`);
  return res.data;
};

export const fetchAlbumBySlug = async (slug) => {
  const res = await axios.get(`${BASE_URL}/album/${slug}`);
  return res.data;
};