"use server";

import { revalidateTag } from "next/cache";
import dbClient from "../database";

export default async function submitReviewAction(prev, formData) {
  try {
    const media_id = formData.get("media_id");
    const name = formData.get("name");
    const review = formData.get("reviewText");

    const db = (await dbClient.connect()).db();
    await db.collection("reviews").insertOne({ name, review, media_id, date: new Date() });
    revalidateTag("reviews");
    prev.message = "success";
  } catch (e) {
    console.log("submitReviewAction error", e);
    prev.message = "fail";
    prev.error = "Something went wrong, please try again";
  } finally {
    dbClient.close();
  }

  return prev;
}
