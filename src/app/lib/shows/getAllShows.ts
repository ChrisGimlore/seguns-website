import { supabase } from "@/app/data/supabase";

export const getAllShows = async () => {
  try {
    const { data, error } = await supabase.from("posters").select();

    if (error) {
      throw new Error("Error fetching images");
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching images:", error.message);
    return []; // Return an empty array in case of an error
  }
};
