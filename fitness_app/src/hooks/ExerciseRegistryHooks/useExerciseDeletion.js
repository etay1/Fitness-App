import { supabase } from "../../supabase/client";
import useRefreshPage from "../../hooks/useRefreshPage";

function useExerciseDeletion() {
  const handleRefresh = useRefreshPage();
  const confirmDeletion = async (type, id, closeDeleteExercisePopup) => {
    let tableName;
    let identifier;

    if (type === "cardio") {
      tableName = "cardio_exercise";
      identifier = "cardio_exercise_id";
    } else if (type === "strength") {
      tableName = "weight_exercise";
      identifier = "weight_exercise_id";
    }

    if (tableName && identifier) {
      const { data, error } = await supabase
        .from(tableName)
        .delete()
        .eq(identifier, id);

      console.log(tableName, identifier, id);

      if (error) {
        console.error("Error deleting exercise:", error);
      } else {
        console.log("Exercise deleted successfully");
        closeDeleteExercisePopup();
        handleRefresh();
      }
    }
  };

  return { confirmDeletion };
}

export default useExerciseDeletion;
