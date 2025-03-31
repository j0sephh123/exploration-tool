import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Node, ExplorationState } from "./types";
import NodeDisplay from "./components/NodeDisplay";
import BranchList from "./components/BranchList";
import Navigation from "./components/Navigation";

function App() {
  const [state, setState] = useState<ExplorationState>(() => {
    const rootId = uuidv4();
    const rootNode: Node = {
      id: rootId,
      content: "",
      parentId: null,
      children: [],
    };

    return {
      nodes: { [rootId]: rootNode },
      activeNodeId: rootId,
    };
  });

  const activeNode = state.nodes[state.activeNodeId];

  const handleCreateBranch = useCallback(
    (branchName: string) => {
      const newNodeId = uuidv4();
      const newNode: Node = {
        id: newNodeId,
        content: "",
        parentId: state.activeNodeId,
        children: [],
      };

      setState((prevState) => {
        const updatedActiveNode = {
          ...prevState.nodes[prevState.activeNodeId],
          children: [
            ...prevState.nodes[prevState.activeNodeId].children,
            { branchName, childId: newNodeId },
          ],
        };

        return {
          nodes: {
            ...prevState.nodes,
            [prevState.activeNodeId]: updatedActiveNode,
            [newNodeId]: newNode,
          },
          activeNodeId: newNodeId,
        };
      });
    },
    [state.activeNodeId]
  );

  const handleContentChange = useCallback(
    (content: string) => {
      setState((prevState) => {
        const updatedNode = {
          ...prevState.nodes[prevState.activeNodeId],
          content,
        };

        return {
          ...prevState,
          nodes: {
            ...prevState.nodes,
            [prevState.activeNodeId]: updatedNode,
          },
        };
      });
    },
    [state.activeNodeId]
  );

  const handleBranchSelect = useCallback((nodeId: string) => {
    setState((prevState) => ({
      ...prevState,
      activeNodeId: nodeId,
    }));
  }, []);

  const handleGoBack = useCallback(() => {
    const parentId = activeNode.parentId;
    if (parentId) {
      setState((prevState) => ({
        ...prevState,
        activeNodeId: parentId,
      }));
    }
  }, [activeNode]);

  const handleSaveSession = useCallback(() => {
    const dataToSave = {
      nodes: state.nodes,
      rootNodeId: Object.values(state.nodes).find(
        (node) => node.parentId === null
      )?.id,
    };

    const jsonString = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `exploration-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [state.nodes]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Branching Exploration Tool</h1>
        <Navigation
          canGoBack={!!activeNode.parentId}
          onGoBack={handleGoBack}
          onSaveSession={handleSaveSession}
        />
      </header>

      <main className="app-content">
        <div className="node-container">
          <NodeDisplay
            node={activeNode}
            onCreateBranch={handleCreateBranch}
            onContentChange={handleContentChange}
          />
        </div>

        <aside className="branches-sidebar">
          <BranchList
            branches={activeNode.children}
            onBranchSelect={handleBranchSelect}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
