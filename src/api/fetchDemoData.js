export const fetchDemoData = async () => {
  try {
    const response = await fetch("/demoData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch demo data");
    }
    const data = await response.json();
    return data;
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
