export interface AxiosConfig {
    headers?: {
        [key: string]: string;
    };
    withCredentials?: boolean;
}
export interface AxiosData {
    [key: string]: any;
}
export interface AxiosResult {
    data: any;
    status: number;
    statusText: string;
}
export interface Axios {
    defaults: {
        baseUrl: string;
        headers: {
            [key: string]: string;
        };
    };
    get(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    put(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    patch(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    post(url: string, data?: string | AxiosData | FormData, config?: AxiosConfig): Promise<AxiosResult>;
    delete(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    options(url: string, config?: AxiosConfig): Promise<AxiosResult>;
    head(url: string, config?: AxiosConfig): Promise<AxiosResult>;
}
declare const axios: Axios;
export default axios;
