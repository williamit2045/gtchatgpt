// helpers/getCohorts.js - use this instead of applySorting
const getCohorts = async ({ sort, baseCohort, baseCohorts = [], query = {}, page = 1, limit = 12 }) => {
    try {
        // Keep your existing query logic but centralized
        let sortCriteria;
        switch(sort) {
            case "sharedUsers":
                if (baseCohort) {
                    query.uids = { $in: baseCohort.uids };
                } else if (baseCohorts.length) {
                    query.uids = { $in: baseCohorts.flatMap(c => c.uids) };
                }
                sortCriteria = { userCount: -1 };
                break;
            // ... rest of your sort cases
        }

        let cohortsQuery = cohortModel.find(query);
        
        if (sort === "alpha") {
            cohortsQuery = cohortsQuery.collation({ locale: 'en', strength: 2 });
        }

        return await cohortsQuery
            .sort(sortCriteria)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();
    } catch (err) {
        console.error('Error in getCohorts:', err);
        return [];
    }
};