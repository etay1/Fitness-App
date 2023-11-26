import { useState } from "react";
import { useSession } from "../supabase/sessionContext";
import { supabase } from "../supabase/client";
import { useEffect } from "react";

const useFetchWeightData = () => {
	const [weights, setWeights] = useState([]);
	const [dates, setDates] = useState([]);
	const { session } = useSession();
	useEffect(() => {
		const fetchData = async () => {
		try {
			const { data: userWeight, error } = await supabase
			.from("user_weight")
			.select("weight, date")
			.eq("user_id", session.user.id);

			if (error) {
			throw new Error("Error fetching data from Supabase");
			}
		} catch (error) {
			console.error("Error in fetchData:", error);
		}
		};

		fetchData();
	}, []);

	return {
		weights,
		dates,
	};
};

export default useFetchWeightData;

