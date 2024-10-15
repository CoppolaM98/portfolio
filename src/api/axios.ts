import axios, { AxiosRequestConfig } from "axios";
import { loadingManager } from "utils/loading/LoadingManager";
import { notificationManager } from "utils/notification/NotificationManager";

export interface AxiosCustomParams {
  enableRefreshOnError?: boolean,
  hideLoading?: boolean
}

export type AxiosWrappedApiCall<ReturnType, Args extends readonly any[] = []> = (...params: [...Args, { params?: AxiosCustomParams }?]) => Promise<ReturnType>

const API_CALL_KEY = "AXIOS_API_CALL";

const defaultOptions: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const axiosInstance = axios.create(defaultOptions);


axiosInstance.interceptors.request.use(async function (config) {
  const params: AxiosCustomParams | undefined = config.params
  if (!params?.hideLoading) {
    loadingManager.create(API_CALL_KEY + config.url);
  }
  config.headers = { ...config.headers, ...(await getHeaders()) };

  return config;
});

// let reauthPromise: Promise<any> | null = null;

export async function getHeaders(): Promise<any> {
  const headers: any = {};

  /*
  const authData = store.getState(s => s.authData);

  if (authData?.access_token && Date.now() < authData.expires_at * 1000) {
    headers.Authorization = `Bearer ${authData.access_token}`;
  } else {
    // we haven't a valid access token we start login process
    console.log("token not valid we try to re-authenticate");
    if (!reauthPromise) {
      //TODO reAuthPromise = reauthenticate();
    }
    try {
      const reauthResponse = await reauthPromise;
      headers.Authorization = `Bearer ${reauthResponse.authData.access_token}`;
    } finally {
      reauthPromise = null;
    }
  }*/

  return headers;
}

axiosInstance.interceptors.response.use(
  (response) => {
    loadingManager.remove(API_CALL_KEY + response.config.url);

    return response;
  },
  async (err) => {
    loadingManager.remove(API_CALL_KEY + err.config.url);

    const params: AxiosCustomParams | undefined = err.config.params

    let enableRefreshPanel = params?.enableRefreshOnError;
    let notifyError: boolean = true;

    let errorTitle = "";
    let errorMessage = "";

    if (!err.response?.data?.length) {
      errorTitle = "general error"
      errorMessage = err.message;
    } else if (err.response.status === 512) {
      const genericErrorsList = err.response.data;
      errorTitle = genericErrorsList && genericErrorsList.length > 0 ? genericErrorsList[0].error : "";
      errorMessage = genericErrorsList && genericErrorsList.length > 0 ? genericErrorsList[0].description : "";
      enableRefreshPanel = err.response.data.enableRefreshPanelOption;
    } else if (err.response.status === 404) {
      errorTitle = "not available (404)";
      errorMessage = err.response.data.status;
    } else {
      errorTitle = err.response.status;
      errorMessage = "unhandled error with code " + err.response.status;
      if (err.response.data) {
        if (typeof err.response.data === "string") errorMessage = err.response.data;
        else
          errorMessage = JSON.stringify(err.response.data);
      }
    }
    if (notifyError) {
      notificationManager.create({
        title: errorTitle,
        message: errorMessage,
        key: API_CALL_KEY + err.config.url,
        type: "error",
        permanent: true,
        enableRefreshPanel
      });
    }
    return Promise.reject(err);
  }
);