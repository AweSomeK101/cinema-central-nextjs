import React from "react";

function ReviewsList({ reviews }) {
  if (!reviews || reviews.length < 1) return <p>No reviews yet</p>;

  return (
    <div className="flex flex-col gap-2">
      {reviews.map((review) => (
        <Review key={review._id} name={review.name} date={review.date} review={review.review} />
      ))}
    </div>
  );
}

function Review({ name, date, review }) {
  return (
    <div>
      <div>
        {name}{" "}
        <span className="text-xs text-gray-300 pl-2">{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className="w-full max-w-[750px] bg-secondary-400 rounded-md p-2">{review}</div>
    </div>
  );
}

export default ReviewsList;
