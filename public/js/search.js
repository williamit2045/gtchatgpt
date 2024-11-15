async function performQuickSearch(query) {
    const resultsDropdown = document.querySelector(".search-results-dropdown");

    if (!query) {
        resultsDropdown.innerHTML = "";  // Clear results if no query
        resultsDropdown.style.display = "none";
        return;
    }

    try {
        const response = await fetch(`/search/quick-search?query=${encodeURIComponent(query)}`);
        const cohorts = await response.json();
        
        console.log("Cohorts fetched:", cohorts);  // Add this log to see fetched data

        // Display results in dropdown
        resultsDropdown.innerHTML = cohorts.map(cohort => `
            <div class="cohort" onclick="window.location.href='/cohort/details?id=${cohort._id}&title=${encodeURIComponent(cohort.cohort)}'">
                <div class="cohort-name">${cohort.cohort}</div>
                <div class="cohort-info">Users: ${cohort.userCount} | Shared: ${cohort.sharedCohortCount}</div>
            </div>
        `).join("");

        resultsDropdown.style.display = "block";
    } catch (error) {
        console.error("Quick search error:", error);
        resultsDropdown.innerHTML = "<div class='error'>Error loading results</div>";
        resultsDropdown.style.display = "block";
    }
}
