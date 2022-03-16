const baseUrl = "https://6231790a05f5f4d40d7b0eaf.mockapi.io/"

export function url() {
  return baseUrl;
}

export function booksGet(url) {
    
    return fetch(baseUrl + url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        
      },
    });
  }