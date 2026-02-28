interface TileProps {
  icon: string;
  title: string;
  description: string;
}

export default function Tile({ icon, title, description }: TileProps) {
  return (
    <div className="rounded-r20 border border-white/10 bg-white/[0.03] p-3.5">
      <div className="mb-2.5 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] border border-red/35 bg-red/10 text-lg">
        {icon}
      </div>
      <h3 className="mb-1.5 mt-0 text-base font-[950]">{title}</h3>
      <p className="m-0 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
