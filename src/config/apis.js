const fetchHariList = async () => {
  const response = await fetch(import.meta.env.PUBLIC_API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch hari list");
  }
  return await response.json();
};

const fetchHariDetails = async (id) => {
  const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch details for id: ${id}`);
  }
  return await response.json();
};

export { fetchHariList, fetchHariDetails };
