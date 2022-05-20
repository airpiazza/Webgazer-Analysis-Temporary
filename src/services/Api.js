import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://webgazeranalysisbackend-env.eba-px8exstr.us-west-1.elasticbeanstalk.com/`
    // baseURL: `http://54.193.20.125:8081/` `https://backend.cpphappiwebapp.com/`
  })
}
