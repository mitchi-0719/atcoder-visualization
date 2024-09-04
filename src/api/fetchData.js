export const fetchData = async () => {
  try {
    const allData = [];
    for (let count = 0; count < 10; count++) {
      const response = await fetch(
        `https://atcoder-visualization.netlify.app/.netlify/functions/get-data?limit=${
          (count + 1) * 10000
        }&offset=${count * 10000}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch demo data");
      }
      const data = await response.json();
      allData.push(data);
    }
    return allData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchContestData = async () => {
  try {
    const response = await fetch("/AllContestData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch demo data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
