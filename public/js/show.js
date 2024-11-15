async function updateShow(sortType, page = 1, baseCohortIds = "", section = "") {
    try {
        const currentUrl = new URL(window.location.href);
        
        console.log('Section:', section);  // Debug log
        console.log('Sort type:', sortType);  // Debug log
        
        if (section === "userCohorts") {
            currentUrl.searchParams.set('userSort', sortType);
        } else if (section === "relatedCohorts") {
            currentUrl.searchParams.set('relatedSort', sortType);
        } else {
            currentUrl.searchParams.set('sort', sortType);
        }
        
        if (page) currentUrl.searchParams.set('page', page);
        if (baseCohortIds) currentUrl.searchParams.set('baseCohortIds', baseCohortIds);
        
        console.log('New URL:', currentUrl.toString());  // Debug log
        window.location.href = currentUrl.toString();
    } catch (error) {
        console.error("Error in updateShow:", error);
        alert("An error occurred while updating the cohort list. Please try again.");
    }
}