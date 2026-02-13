import axios from 'axios';

axios.interceptors.response.use(undefined, function (error) {
  if (error.response) {
    // Request made and server responded
    console.error('Axios HTTP ' + error.response.status, error.message);
    console.error('Error Data', error.response.data);
    return error.response;
  } else if (error.request) {
     // The request was made but no response was received
    console.error('Axios Error', error.request);
  } else {
     // Something happened in setting up the request that triggered an Error
    console.error('Axios HTTP', error.message);
  }
  return Promise.reject(error);
});

export default {
  async sendContactForm(request) {
    let options = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    request.app_key = 'scada';
    let response = await axios.post(`https://nmesql59ql.execute-api.us-west-1.amazonaws.com/contactLambda`, request, options);
    return response;
  },

}
