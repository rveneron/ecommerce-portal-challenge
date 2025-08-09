export type IFetchErrors = {
  response?: any;
  status: number | string;
  message?: string;
  data?: any;
  networkError?: boolean;
  reference?: number | string;
};

export const isNetworkError = (error: IFetchErrors) => {
  return !error.response && !error.status;
};

export const getResponseError = (error: IFetchErrors) => {
  if (error?.response)
    if (typeof error?.response?.data === 'object') return error?.response?.data;
    else if (typeof error?.response?.data === 'string')
      return {
        status: error?.response.status,
        message: error?.response.statusText || error?.response?.data
      };
  return error;
};
