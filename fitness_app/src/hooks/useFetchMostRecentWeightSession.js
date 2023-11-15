const UseFetchMostRecentCardioSession = async ({ supabase, userId }) => {
    const { data, error } = await supabase
        .from("weight_exercise")
        .select("name, description, calories_per_rep")
        .order("weight_exercise_id", { ascending: false })
        .limit(1);

    if (error) {
        console.error(error);
        return null; // Handle error appropriately
    }

    return data[0]; // Return the most recent cardio session data
};

export default UseFetchMostRecentCardioSession;
