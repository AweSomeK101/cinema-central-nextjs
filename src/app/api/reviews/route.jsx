import dbClient from "@/lib/database";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const media_id = searchParams.get("media_id");
  let body = {},
    options = { status: 200 };

  try {
    const db = (await dbClient.connect()).db();
    body = await db.collection("reviews").find({ media_id }).toArray();
  } catch (error) {
    console.log("GET review error: ", error);
    options = { ...options, status: 500 };
  } finally {
    dbClient.close();
  }

  return Response.json(body, options);
}
