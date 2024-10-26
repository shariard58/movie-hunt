import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
  onSearchChange: (value: string) => void;
  searchTerm: string;
}

interface FormValues {
  searchTerm: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
  searchTerm,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { searchTerm: "" },
    mode: "onChange",
  });

  const inputSearchTerm = watch("searchTerm");

  useEffect(() => {
    setValue("searchTerm", searchTerm);
  }, [searchTerm, setValue]);

  useEffect(() => {
    if (inputSearchTerm?.length >= 2) {
      onSearchChange(inputSearchTerm);
    }
  }, [inputSearchTerm, onSearchChange]);

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[460px] sm:mt-4 md:mt-0">
      <span className="absolute top-1/2 transform -translate-y-1/2 text-gray-400">
        <AiOutlineSearch className="w-5 h-5" />
      </span>
      <input
        type="text"
        placeholder="Search for movies..."
        {...register("searchTerm", { required: true, minLength: 2 })}
        className="w-full pl-10 pr-4 py-2 bg-transparent border-b border-black-200 rounded-none focus:outline-none focus:border-b-black-600"
      />
      {errors.searchTerm?.type === "minLength" && (
        <p className="text-red-500 text-sm my-1">
          Minimum 2 characters required
        </p>
      )}
    </div>
  );
};

export default SearchInput;
