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
  getAnswer: function(id) {
    return axios.get("/api/answers/" + id);
  },
  // Deletes the pool with the given id
  deletePool: function(id) {
    return axios.delete("/api/pools/" + id);
  },
  // Saves a pool to the database
  savePool: function(poolData) {
    return axios.post("/api/pools", poolData);
  },
  saveAnswers: function(answerData) {
    return axios.post("/api/answers", answerData);
  },  
  updateAnswer: function(id, answerData) {
    return axios.put("/api/answers/" + id, answerData);
  },
  getAnswers: function() {
    return axios.get("/api/answers");
  },
  updatePool: function(id, poolData) {
    return axios.put("/api/pools/" + id, poolData);
  }
};
