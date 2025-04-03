import { Branch } from "../types";

interface BranchListProps {
  branches: Branch[];
  onBranchSelect: (childId: string) => void;
}

export default function BranchList({
  branches,
  onBranchSelect,
}: BranchListProps) {
  if (branches.length === 0) {
    return (
      <div className="text-base-content/60 p-4 text-base">
        No branches available
      </div>
    );
  }

  return (
    <div className="w-full">
      <h3 className="px-2 py-3 text-base-content/70 text-base font-medium">
        Branches
      </h3>
      <ul className="menu bg-base-200 rounded-lg">
        {branches.map((branch) => (
          <li key={branch.childId} className="mb-1">
            <button
              onClick={() => onBranchSelect(branch.childId)}
              className="flex justify-between items-center hover:bg-base-300 active:bg-base-300 py-1.5 px-3"
            >
              <span className="text-base-content text-base">
                {branch.branchName}
              </span>
              <svg
                className="w-4 h-4 text-base-content/70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 6l6 6-6 6"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
