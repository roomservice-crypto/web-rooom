export default function Tag(props: React.PropsWithChildren) {
  return (
    <span className="py-1 px-3 border border-[#0A0517] rounded-lg text-sm">
      {props.children}
    </span>
  );
}
