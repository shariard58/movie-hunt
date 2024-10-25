import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:p-4 space-y-4 md:space-y-0">
      <div className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          <li className="hover:text-orange-700 hover:font-bold transition-colors duration-200 cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
            Films
          </li>
          <li className="hover:text-orange-700 hover:font-bold transition-colors duration-200 cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
            Social
          </li>
          <li className="hover:text-orange-700 hover:font-bold transition-colors duration-200 cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
            News
          </li>
          <li className="hover:text-orange-700 hover:font-bold transition-colors duration-200 cursor-pointer bg-gradient-to-r from-[#FF8C00] to-[#FFA500] bg-clip-text text-transparent">
            About
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <div className="hover:translate-y-[-3px] transition-transform duration-200">
          <Image
            height={30}
            width={30}
            src="/assets/icons/bell.png"
            alt="bell"
          />
        </div>
        <div className="hover:translate-y-[-3px] transition-transform duration-200">
          <Image height={30} width={30} src="/assets/icons/sun.png" alt="sun" />
        </div>
        <div className="hover:translate-y-[-3px] transition-transform duration-200">
          <Image
            height={26}
            width={26}
            src="/assets/icons/moon.png"
            alt="moon"
          />
        </div>
        <div className="hover:translate-y-[-3px] transition-transform duration-200">
          <Image
            height={30}
            width={30}
            src="/assets/icons/shopping-cart.png"
            alt="cart"
          />
        </div>
      </div>
    </header>
  );
}
