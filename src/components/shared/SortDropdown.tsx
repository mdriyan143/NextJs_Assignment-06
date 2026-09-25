type SortValue = "duration" | "calories" | "rating";

type SortDropdownProps = {
  sortBy: SortValue;
  setSortBy: (value: SortValue) => void;
};

const SortDropdown = ({
  sortBy,
  setSortBy,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-zinc-500">
        Sort By
      </span>

      <div className="relative">
        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy( event.target.value as SortValue )}
          className="appearance-none rounded-lg border border-zinc-800 bg-zinc-950 py-2 pl-3 pr-9 text-xs text-white outline-none transition hover:border-zinc-700">
          <option value="duration">
            Duration
          </option>

          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500">
         ⌄
        </span>
      </div>
    </div>
  );
};

export default SortDropdown;