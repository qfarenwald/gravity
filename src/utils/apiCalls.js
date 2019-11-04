export const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw Error(response.statusText);
};
