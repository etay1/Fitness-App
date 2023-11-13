import { supabase } from "../../supabase/client";

function useExerciseDeletion() {
  const confirmDeletion = async (type, id) => {
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
    
        console.log(tableName, identifier, id)

      console.log("data:", data);
      console.log("error:", error);

      if (error) {
        console.error("Error deleting exercise:", error);
      } else {
        const rowsDeleted = data?.length;
        if (rowsDeleted) {
          console.log(`${rowsDeleted} rows deleted successfully`);
        } else {
          console.log("No rows deleted");
        }
      }
    }
  };

  return { confirmDeletion };
}

export default useExerciseDeletion;
