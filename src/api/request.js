const baseURL = "https://api.github.com/users/";

export const getUser = async (username) => {
  const response = await fetch(`${baseURL}${username}`);
  const user = await response.json();

  return user;
};

export const getRepos = async (username) => {
  const response = await fetch(`${baseURL}${username}/repos`);
  const repos = await response.json();

  return repos;
};

export const getStarred = async (username) => {
  const response = await fetch(`${baseURL}${username}/starred`);
  const starred = await response.json();

  return starred;
};
