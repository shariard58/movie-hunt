"use client";
import { useState } from "react";

export default function SubHeader() {
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="hidden md:flex justify-between items-center space-x-8 p-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
      </select>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Select Language
        </option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Hindi">Hindi</option>
        <option value="Bangla">Bangla</option>
      </select>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="France">France</option>
        <option value="India">India</option>
        <option value="Bangladesh">Bangladesh</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Select Rating
        </option>
        <option value="9+">9+</option>
        <option value="8+">8+</option>
        <option value="7+">7+</option>
        <option value="6+">6+</option>
        <option value="5+">5+</option>
      </select>

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Select Year
        </option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-300 rounded-md p-2 text-sm w-52 lg:w-56 xl:w-60"
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="Popularity">Popularity</option>
        <option value="Rating">Rating</option>
        <option value="Release Date">Release Date</option>
      </select>
    </div>
  );
}
