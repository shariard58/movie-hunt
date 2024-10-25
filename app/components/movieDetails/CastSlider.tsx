
"use client";
import React from "react";


interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}


interface CastSliderProps {
  castData: CastMember[]; 
}

const CastSlider: React.FC<CastSliderProps> = ({ castData }) => {
  console.log("The cast data is", castData);

  // Limit cast data to a maximum of 10 members
  const limitedCastData = castData.slice(0, 10);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {/* Check if limitedCastData is an array and has items */}
        {Array.isArray(limitedCastData) && limitedCastData.length > 0 ? (
          limitedCastData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4"
            >
              <div
                className="bg-cover bg-center h-48 rounded-lg"
                style={{
                  backgroundImage: member.profile_path
                    ? `url('https://image.tmdb.org/t/p/w500${member.profile_path}')`
                    : "url('/assets/default-profile.png')",
                }}
              />
              <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
              <p className="text-sm text-gray-500">
                Character: {member.character}
              </p>
              <p className="text-xs text-gray-400">
                Known for: {member.known_for_department}
              </p>
              <p className="text-xs text-gray-400">
                {member.adult ? "Age: 18+" : "Age: All Ages"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">
            No cast members available.
          </p>
        )}
      </div>
    </div>
  );
};

export default CastSlider;
