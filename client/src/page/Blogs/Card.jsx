import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Card = ({ blog }) => {
  const {
    id,
    title,
    author,
    authorPic,
    category,
    content,
    image,
    published_date,
    reading_time,
    tags,
  } = blog || {};

  return (
    <Link
      to={`/blogs/${id}`}
      className="block rounded-lg shadow-lg overflow-hidden w-full lg:flex mb-10 transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div
        className="h-48 lg:w-full bg-cover text-center overflow-hidden opacity-90"
        style={{
          backgroundImage: `url(${image || "default-image.jpg"})`,
        }}
        title={title || "Untitled Blog"}
      ></div>

      <div className="bg-white p-6 flex flex-col justify-between leading-normal">
        <div>
          <h3 className="text-gray-900 text-2xl font-semibold mb-2 hover:text-gray-800">
            {title || "Untitled Blog"}
          </h3>

          <p className="text-gray-600 text-base">
            {content || "Short content preview goes here."}
          </p>
        </div>

        <div className="flex items-center mt-6">
          <img
            src={authorPic || "https://randomuser.me/api/portraits/men/86.jpg"}
            alt={author || "Author"}
            className="h-10 w-10 rounded-full mr-3 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {author || "Author Name"}
            </p>
            <p className="text-gray-500 text-xs">
              {published_date || "14 Aug"} - {reading_time || "5 min read"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
