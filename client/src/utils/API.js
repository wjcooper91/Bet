import axios from "axios";

export default {
  // Gets all pools
  getPools: function() {
    return axios.get("/api/pools");
  },
  // Gets the pool with the given id
  getPool: function(id) {
    return axios.get("/api/pools/" + id);
  },
  // Deletes the pool with the given id
  deletePool: function(id) {
    return axios.delete("/api/pools/" + id);
  },
  // Saves a pool to the database
  savePool: function(poolData) {
    return axios.post("/api/pools", poolData);
  },
  saveAnswers: function(poolData) {
    return axios.post("/api/answers", poolData);
  }
};
