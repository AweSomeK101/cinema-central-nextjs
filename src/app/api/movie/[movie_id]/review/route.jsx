import dbClient from "@/lib/database";

export async function GET(request, { params }) {
  const movie_id = (await params).movie_id.toString();
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
  const { name, review } = await request.json();

  if (!name || !review) return new Response(null, { status: 400 });

  let body = {},
    options = { status: 200 };

  try {
    const db = (await dbClient.connect()).db();
    const res = await db
      .collection("reviews")
      .insertOne({ name, review, movie_id, date: new Date() });
    body = { ...body, _id: res.insertedId.toString() };
  } catch (error) {
    console.log("POST review error", error);
    options = { ...options, status: 500 };
  } finally {
    dbClient.close();
  }

  return Response.json(body, options);
}
