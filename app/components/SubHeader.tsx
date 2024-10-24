"use client";
import { useState } from "react";

export default function SubHeader() {
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="hidden md:flex md:gap-4 lg:gap-8 xl:gap-12 p-4">
      <div className="flex-1 h-full">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full h-full"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div>

      <div className="flex-1 h-full">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full h-full"
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
      </div>

      <div className="flex-1 h-full">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full h-full"
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
      </div>

      <div className="flex-1 h-full">
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full h-full"
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
      </div>

      <div className="flex-1 h-full">
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm w-full h-full"
        >
          <option value="" disabled>
            Select Year
          </option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
