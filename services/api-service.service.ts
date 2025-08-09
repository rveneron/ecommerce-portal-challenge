import { BACKEND_URL } from '@/config/service-path.config';
import { FORCE_SPACE } from '@/config/space.config';
import {
  __X_SHOP_COUNTRY__,
  __X_SHOP_REGION_CITY__,
  __X_SHOP_REGION_STATE__
} from '@/config/cookie.config';

export type RequestConfig = RequestInit & {
  enabled?: boolean;
  auth?: boolean;
  workspace?: boolean;
  params?: any;
  responseType?: string;
  next?: { tags?: string[] };
  headers?: Partial<Record<string, string>> | undefined;
  accessToken?: string;
  withCredentials?: boolean;
  retry?: boolean;
};

enum Method {
  'GET' = 'GET',
  'POST' = 'POST',
  'PUT' = 'PUT',
  'DELETE' = 'DELETE',
  'PATCH' = 'PATCH'
}

export type GetTokenFunction = () => Promise<string | undefined> | string | undefined;

export class ApiService {
  private readonly getToken: GetTokenFunction;

  constructor(getToken: GetTokenFunction) {
    this.getToken = getToken;
  }

  async getAuthToken() {
    return this.getToken();
  }

  request = async (method: Method, path: string, config: RequestConfig = {}) => {
    const url = new URL(
      path?.startsWith('http') || path?.startsWith('https') ? path : BACKEND_URL + path
    );

    if (config.params) {
      Object.keys(config.params).forEach((key) => url.searchParams.append(key, config.params[key]));
    }

    const headers: any = config?.headers || {};
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }
    if (FORCE_SPACE && !headers['x-workspace']) headers['x-workspace'] = FORCE_SPACE;

    if (config?.auth) {
      const authToken = config?.accessToken || (await this.getAuthToken());

      if (authToken) headers['Authorization'] = `Bearer ${authToken}`;
    }

    let body = config.body;
    if (body instanceof FormData) {
      // Let the browser handle the header in case the body is formData. Necessary for file handling
      delete headers['Content-Type'];
    } else if (headers['Content-Type'] === 'application/json' && body) {
      body = JSON.stringify(body); // Serialize only if JSON
    }

    // TODO: REMOVE THIS WHEN THIS FUNCTIONALITY IS IMPLEMENTED
    if (process.env.NEXT_PUBLIC_ADDRESS_COUNTRY !== 'CU') {
      headers[__X_SHOP_REGION_STATE__] = process.env.NEXT_PUBLIC_ADDRESS_COUNTRY;
      headers[__X_SHOP_REGION_CITY__] = process.env.NEXT_PUBLIC_ADDRESS_COUNTRY;
      headers[__X_SHOP_COUNTRY__] = process.env.NEXT_PUBLIC_ADDRESS_COUNTRY;
    }

    try {
      const response = await fetch(url.toString(), {
        method,
        ...config,
        headers,
        body
      });

      // Check if the answer is valid
      if (!response.ok) {
        let errorData: any;
        try {
          errorData = await response.json(); // Try parsing the error as JSON
        } catch {
          errorData = await response.text(); // If not JSON, use text
        }

        console.error('API SERVICE - Network or Service Error: =============', {
          endpoint: url?.toString(),
          error: errorData,
          body,
          headers
        });

        return { error: errorData, status: response.status };
      }

      // Try to parse the response body
      let data;
      if (config.responseType === 'blob') {
        data = await response.blob();
      } else {
        data = await response.json();
      }
      return { data };
    } catch (error: any) {
      console.error('API SERVICE - Network or Service Error: =============', {
        endpoint: url?.toString(),
        error: error?.message || error,
        body,
        headers
      });

      // Returns the error to the client
      return { error: { message: 'Network error or server unavailable.', details: error } };
    }
  };

  get = async (path: string, params: any = {}, config: RequestConfig = {}) => {
    return this.request(Method.GET, path, {
      params,
      ...config
    });
  };

  post = async (path: string, data: any = {}, config: RequestConfig = {}) => {
    return this.request(Method.POST, path, {
      body: data,
      ...config
    });
  };

  put = async (path: string, data: any = {}, config: RequestConfig = {}) => {
    return this.request(Method.PUT, path, {
      body: data,
      ...config
    });
  };

  patch = async (path: string, data: any = {}, config: RequestConfig = {}) => {
    return this.request(Method.PATCH, path, {
      body: data,
      ...config
    });
  };

  delete = async (path: string, data: any = {}, config: RequestConfig = {}) => {
    return this.request(Method.DELETE, path, {
      body: data,
      ...config
    });
  };
}
