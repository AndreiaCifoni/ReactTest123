import axios from "axios";

const KEY = "AIzaSyDnVHjqt0Wce96mhX6sxIKOQmzIUFiDZZM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  },
});
