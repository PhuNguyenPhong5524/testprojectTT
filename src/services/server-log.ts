// import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// import { ENV } from './serverConfig';
// import { log } from 'console';

// /**
//  * If SHOW_LOG = false to stop API logging
//  */
// const SHOW_LOG = true;

// /**
//  * Describe request api logging
//  *
//  * @param config is AxiosRequestConfig
//  */
// function describeRequest(config: AxiosRequestConfig<any>) {
//   if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
//     return;
//   }
//   //------------------------------------------
//   //------------------------------------------
//   if (config.params) {
//     return;
//   }
//   //-------------------------------------------
//   if (config.data) {
//     return;
//   }
//   //--------------------------------------------
//   console.groupEnd();
// }

// /**
//  * Describe response api logging
//  *
//  * @param response is AxiosResponse
//  */
// function describeSuccessResponse(response: AxiosResponse<any, any>) {
//   if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
//     return;
//   }
//   //----------------------------------------------
//   //----------------------------------------------
//   //--------------------------------------------------
//   console.groupEnd();
// }

// /**
//  * Describe error response api logging
//  *
//  * @param error is any
//  */
// function describeErrorResponse(error: any) {
//   if (!SHOW_LOG || ENV.TYPE !== 'Develop') {
//     return;
//   }
//   //-----------------------------------------------------
//   console.group('%c ERROR', 'color: white; background-color: #D33F49');
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     const request = error.response.request || error.request || {};
//     log
//     //------------------------------------------------
//     //------------------------------------------------
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.ClientRequest in node.js
//   } else {
//     // Something happened in setting up the request that triggered an Error
//   }
// }

// const Logger = {
//   describeRequest,
//   describeSuccessResponse,
//   describeErrorResponse,
// };

// export default Logger;
