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
    return <div className="branch-list-empty">No branches available</div>;
  }

  return (
    <div className="branch-list">
      <h3>Branches</h3>
      <ul>
        {branches.map((branch) => (
          <li key={branch.childId}>
            <button
              className="branch-item"
              onClick={() => onBranchSelect(branch.childId)}
            >
              {branch.branchName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
