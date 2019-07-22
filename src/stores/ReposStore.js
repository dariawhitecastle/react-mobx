import { createContext } from 'react';
import { action, observable } from 'mobx';
import getReposService from '../services/getReposService';

export class ReposStore {
  @observable repos = [];
  @observable currentUser = '';

  @action.bound
  async getRepos(username) {
    try {
      this.currentUser = username;
      this.repos = await getReposService(username);
    } catch (err) {
      throw err;
    }
  }
}

export const repos = new ReposStore();
export const ReposContext = createContext(repos);
