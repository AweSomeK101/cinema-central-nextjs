export async function apiFetch(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    Promise.reject({ status: response.status, statusText: response.statusText });
  }

  const responseData = await response.json();
  return Promise.resolve(responseData);
}
