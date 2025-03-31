export interface Branch {
  branchName: string;
  childId: string;
}

export interface Node {
  id: string;
  content: string;
  parentId: string | null;
  children: Branch[];
}

export interface ExplorationState {
  nodes: Record<string, Node>;
  activeNodeId: string;
}
