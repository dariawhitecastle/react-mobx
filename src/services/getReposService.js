import axios from 'axios';

async function getReposService(username) {
  let url = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  try {
    return await axios.get(url);
  } catch (err) {
    throw err;
  }
}

export default getReposService;
