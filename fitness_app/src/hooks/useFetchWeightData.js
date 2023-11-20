import { useState } from "react";
import { useSession } from "../supabase/sessionContext";

const useFetchWeightData = async ({ supabase }) => {
	const [weights, setWeights] = useState([]);
	const [dates, setDates] = useState([]);

	const { session } = useSession();

	console.log(session);

	const { data, error } = await supabase
		.from("user_weight")
		.select("weight, date")
		.eq("user_id", session.user.id);

	if (error) {
		console.error(error);
	} else {
		const weights = data.map((weightObj) => weightObj.weight);
		const dates = data.map((weightObj) => weightObj.date);
		setWeights(weights);
		setDates(dates);
	}

	return {
		weights,
		dates,
	};
};

export default useFetchWeightData;
