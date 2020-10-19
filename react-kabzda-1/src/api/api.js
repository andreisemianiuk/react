import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "e6cdce24-b112-41f1-b010-c7cd41540c1a"
  }
})

export const usersApi =  {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  }
}

export const profileApi = {
  getProfile(id) {
    return instance.get(`profile/${id}`)
      .then(responce => responce.data)
  }
}

export const authApi = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  }
}
