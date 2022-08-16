import { useAuth } from "../../lib/auth";
import { ReactNode, FC } from "react";
import Link from "next/link";

type Props = { children: ReactNode };

const Navbar: FC<Props> = ({}) => {
  const { user } = useAuth();

  return (
    <>
      <nav className="relative z-20 pt-4 bg-[#fff]">
        <div className="md:max-w-xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-4 flex justify-between">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28">
                <g data-name="Group 7">
                  <path
                    data-name="Path 16"
                    d="M1.088 4.977h10.425a9.048 9.048 0 0 1 9.024 9.024 9.048 9.048 0 0 1-9.024 9.024 9.043 9.043 0 0 1-7.031-3.3 1.078 1.078 0 0 0-1.486-.145 1.078 1.078 0 0 0-.145 1.486 11.134 11.134 0 0 0 8.589 4.059A11.159 11.159 0 0 0 22.603 14 11.2 11.2 0 0 0 11.477 2.874H1.051A1.029 1.029 0 0 0 0 3.925a1.06 1.06 0 0 0 1.088 1.052ZM17.243 14a5.777 5.777 0 0 1-5.762 5.762 5.773 5.773 0 0 1-4.421-2.066 1.078 1.078 0 0 0-1.486-.145 1.078 1.078 0 0 0-.145 1.486 7.81 7.81 0 0 0 6.052 2.863 7.857 7.857 0 0 0 7.864-7.864 7.857 7.857 0 0 0-7.864-7.864h-8.07A1.029 1.029 0 0 0 2.36 7.223a1.009 1.009 0 0 0 1.051 1.051h8.106A5.715 5.715 0 0 1 17.243 14Zm-5.69-4.566Z"
                    fill="#136fde"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-row mr-auto">
              <p className="ml-6">Sites</p>
              <p className="ml-6">Feedback</p>
            </div>

            <div>
              <Link href="/account">
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.photoUrl}
                  alt="Rounded avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
