const UseWeightPlusCardioCalories = async ({ supabase, sessionId }) => {
    try {
        const { data: weightSessionData, error: weightSessionError } = await supabase
            .from("weight_session")
            .select("weight_exercise_id, sets, reps_per_set")
            //.eq("session_id", sessionId);

        if (weightSessionError) {
            return { data: null, error: weightSessionError };
        }

        const { data: weightExerciseData, error: weightExerciseError } = await supabase
            .from("weight_exercise")
            .select("calories_per_rep")
            .in("weight_exercise_id", weightSessionData.map((item) => item.weight_exercise_id));

        if (weightExerciseError) {
            return { data: null, error: weightExerciseError };
        }

        const { data: cardioSessionData, error: cardioSessionError } = await supabase
            .from("cardio_session")
            .select("cardio_exercise_id, start_time, end_time")
            //.eq("session_id", sessionId);

        if (cardioSessionError) {
            return { data: null, error: cardioSessionError };
        }

        const { data: cardioExerciseData, error: cardioExerciseError } = await supabase
            .from("cardio_exercise")
            .select("calories_per_unit_duration")
            .in("cardio_exercise_id", cardioSessionData.map((item) => item.cardio_exercise_id));

        if (cardioExerciseError) {
            return { data: null, error: cardioExerciseError };
        }

        const totalCaloriesBurntWeight = weightSessionData.reduce((total, session) => {
            const exercise = weightExerciseData.find((item) => item.weight_exercise_id === session.weight_exercise_id);
            const caloriesPerRep = exercise ? exercise.calories_per_rep : 0;
            const reps = session.sets * session.reps_per_set;
            return total + reps * caloriesPerRep;
        }, 0);

        const totalCaloriesBurntCardio = cardioSessionData.reduce((total, session) => {
            const exercise = cardioExerciseData.find((item) => item.cardio_exercise_id === session.cardio_exercise_id);
            const caloriesPerUnitDuration = exercise ? exercise.calories_per_unit_duration : 0;
            
            // Calculate duration in minutes (assuming both start_time and end_time are in the 'HH:MM:SS' format)
            const start = new Date(`1970-01-01T${session.start_time}`);
            const end = new Date(`1970-01-01T${session.end_time}`);
            const durationInMilliseconds = end - start;
            const durationInMinutes = durationInMilliseconds / (1000 * 60);

            return total + durationInMinutes * caloriesPerUnitDuration;
        }, 0);

        return {
            data: {
                weightSession: weightSessionData,
                totalCaloriesBurntWeight,
                cardioSession: cardioSessionData,
                totalCaloriesBurntCardio,
            },
            error: null,
        };
    } catch (error) {
        console.error(error);
    }
};

export default UseWeightPlusCardioCalories;