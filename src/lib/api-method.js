export async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error ${response.status} - ${response.statusText}`);
  }

  return await response.json();
}
