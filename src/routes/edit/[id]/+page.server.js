// src/routes/edit/+page.server.js
import { error, json } from "@sveltejs/kit";
import { getPerson } from "$lib/api";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    console.log("Server load - ID:", params.id); // DEBUG

    if (!params.id) {
      throw error(400, "No person ID provided");
    }

    const person = await getPerson(params.id);
    console.log("Server load - Person:", person); // DEBUG

    return {
      person,
    };
  } catch (err) {
    console.error("Server load error:", err);
    throw error(500, {
      message: err.message || "Failed to load person",
    });
  }
}
