// weightUtils.js
const UseFetchMostRecentWeight = async ({ supabase, userId }) => {
    const { data, error } = await supabase
        .from("user_weight")
        .select("weight, date")
        .eq("user_id", userId)
        .order("date", { ascending: false })
        .limit(1);

    if (error) {
        console.error(error);
        return null; // Handle error appropriately
    }

    return data[0]; // Return the most recent weight data
};

export default UseFetchMostRecentWeight;
