const url = process.env.VITE_SW_PEOPLE_API;

const fetchUser = async () => {
  try {
    if (url) {
      const response = await fetch("https://sw-api.starnavi.io/people/?page=");

      // Check if the response is okay (status code 200)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // Parse the JSON response
      const peopleData = await response.json();
      console.log(peopleData); // Log the data for debugging
      return peopleData; // Return the data to the calling function
    } else {
      console.error("API URL is not defined in the environment variables.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchUser;
