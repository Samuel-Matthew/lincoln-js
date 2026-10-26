// try catch blockconst searchBtn = document.getElementById("search-btn");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", searchMeal);

async function searchMeal() {
  const mealInput = document.getElementById("meal-input").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear old results

  if (!mealInput) {
    resultsDiv.innerHTML = "Please enter a meal name";
    return;
  }

  resultsDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`,
    );
    const searchResult = await res.json();

    console.log(searchResult);

    if (!searchResult.meals) {
      resultsDiv.innerHTML = "No result found";
      return;
    }
    
    resultsDiv.innerHTML = "";
    searchResult.meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal");

      mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <ul>${meal.strInstructions
          .split("\n")
          .filter((step) => step.trim() !== "")
          .map((instruction) => `<li>${instruction}</li>`)
          .join("")}</ul>
          <a href="${meal.strYoutube}">Watch youtube</a>
          `;

      resultsDiv.appendChild(mealDiv);
    });
  } catch (error) {
    console.error(error);
  }
}
