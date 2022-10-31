import clsx from "clsx";
import ArrowRight from "@/svgs/arrow-right.svg";

export default function Button(
  props: React.PropsWithChildren & { className: string; light?: boolean }
) {
  return (
    <button
      className={clsx(
        "text-[#0A0517] border border-[#0A0517] rounded-lg px-6 py-3 flex items-center",
        props.light ? "bg-[#FEFBF2]" : "bg-[#F8DA1B]",
        props.className
      )}
      style={{ boxShadow: "4px 4px 0px #0A0517" }}
    >
      {props.children}
      <ArrowRight className="ml-2" />
    </button>
  );
}
