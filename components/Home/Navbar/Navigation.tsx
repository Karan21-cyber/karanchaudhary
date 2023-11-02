import * as React from "react";
import { motion, usePresence } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";
import { navlinks } from "@/data/navlinks";
import { sociallinks } from "@/data/sociallinks";
import { SocialItems } from "./SocialItems";
import gsap from "gsap";
import { GoDotFill } from "react-icons/go";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavDropDownProps {
  dateTime: string;
  meridiem: string;
}

export default function Navigation({ dateTime, meridiem }: NavDropDownProps) {
  const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);
  const menuRef = React.useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  React.useEffect(() => {
    if (!isPresent) {
      gsap.to(menuRef.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <div
      className={`w-full pl-[110px] xs:pl-[60px] sm:pl-[10px] md:pl-0 h-screen md:w-[480px] md:h-[600px] bg-white md:rounded-[20px] `}
    >
      <div className="flex flex-col  h-full pt-10 md:pt-5 py-3 px-4 gap-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xs md:text-base text-lightgray font-semibold">
            Nepal, Kathmandu <span className="text-black">{dateTime}</span>{" "}
            {meridiem}
          </h1>
        </div>

        <div className="relative h-full  flex gap-4 justify-between">
          <motion.ul variants={variants} className="flex flex-col gap-2">
            {navlinks?.map((data, index) => (
              <MenuItem
                data={data}
                key={data?.id}
                index={index}
                toggle={() => setOpen(false)}
              />
            ))}
          </motion.ul>
          <div className="absolute group left-2 bottom-2 flex gap-2 md:gap-3 items-center cursor-pointer hover:text-lightblue">
            <h1 className="text-xs md:text-base underline group-hover:text-lightblue">
              tharukaran930@gmail.com
            </h1>
            <div className="arrow-icon hidden group-hover:block group-hover:text-lightblue">
              <GoDotFill size={15} />
            </div>
          </div>

          <div className=" absolute right-2 bottom-1 flex flex-col gap-4">
            <motion.ul
              variants={variants}
              className="flex flex-col gap-2 md:gap-4"
            >
              {sociallinks?.map((data, index) => (
                <SocialItems
                  data={data}
                  key={index}
                  toggle={() => setOpen(false)}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemIds = ["Home", "Projects", "Expertise", "About", "Feed", "Contact"];
