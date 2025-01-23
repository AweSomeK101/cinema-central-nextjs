import dbClient from "@/lib/database";

export async function GET(request, { params }) {
  const movie_id = (await params).movie_id;
  let body = {},
    options = { status: 200 };

  try {
    const db = (await dbClient.connect()).db();
    const reviews = await db.collection("reviews").find({ movie_id }).toArray();
    body = reviews;
  } catch (error) {
    console.log("GET review error: ", error);
    options = { ...options, status: 500 };
  } finally {
    dbClient.close();
  }

  return Response.json(body, options);
}

export async function POST(request, { params }) {
  const movie_id = (await params).movie_id;
  const body = await request.json();
  let options = { status: 200 };

  try {
    const db = (await dbClient.connect()).db();
    await db.collection("reviews").insertOne(body);
  } catch (error) {
    console.log("POST review error", error);
    options = { ...options, status: 500 };
  } finally {
    dbClient.close();
  }

  return new Response(null, options);
}
