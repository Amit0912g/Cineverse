import axios from "axios";
const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjlmNGZhYThmN2ZiYTY4YzY3NmY4NTAyMmUwMjEwZCIsIm5iZiI6MTcyNDQxOTM3MC40NjU2NDgsInN1YiI6IjY2Yzc3ZjgwMzgzZmU4MmM1OWVhN2M2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qaUcM5PpXa4s-QV80HhO_Ky8M3pFepbKDhdIG6raSAA'
        
      }
})
export default instance