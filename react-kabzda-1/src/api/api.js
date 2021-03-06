import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "7b4001e9-c455-4bb5-8814-d09f26458311"
  }
})

export const usersApi =  {
  getUsers(page, pageSize) {
    return instance.get(`users?page=${page}&count=${pageSize}`)
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
      .then(response => response.data)
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`)
      .then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
      .then(response => response.data)
  },
  updatePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
      .then(response => response.data);
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile)
      .then(response => response.data)
	}
}

export const authApi = {
  getAuth() {
    return instance.get(`auth/me`)
      .then(response => response.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
	}
}

export const securityApi = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
	}
}