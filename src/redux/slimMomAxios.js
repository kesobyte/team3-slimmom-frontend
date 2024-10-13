import axios from "axios";

const baseURL = 'https://slimmom-backend.goit.global';

export const slimMomAxios = axios.create({baseURL});

export const token = {
  set(token) {
    slimMomAxios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  },
  unset() {
    this.set()
  }
}
