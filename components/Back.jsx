import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Back({to}) {
  return (
    <Link href={to}>
      <FaHome className="text-5xl absolute left-[3rem] top-[2rem]" />
    </Link>
  );
}
