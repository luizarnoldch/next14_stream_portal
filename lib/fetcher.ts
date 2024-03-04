export type FetchOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
    token: string;
};
  
const fetcher = async (url: string, options: FetchOptions) => {
    const { method, body, token } = options;

    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `${token}`,
    });

    const fetchOptions: RequestInit = {
        method: method,
        headers: headers,
    };

    if (body) {
        fetchOptions.body = JSON.stringify(body);
    }

    const res = await fetch(url, fetchOptions);
    return await res.json();
};

export default fetcher;