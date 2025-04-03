import { useState, useRef, MouseEvent } from "react";
import ReactMarkdown from "react-markdown";
import { Node } from "../types";
import remarkGfm from "remark-gfm";

interface NodeDisplayProps {
  node: Node;
  onCreateBranch: (branchName: string) => void;
  onContentChange: (content: string) => void;
}

export default function NodeDisplay({
  node,
  onCreateBranch,
  onContentChange,
}: NodeDisplayProps) {
  const [selection, setSelection] = useState<string>("");
  const [contextMenuPos, setContextMenuPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseUp = () => {
    const selectedText = window.getSelection()?.toString().trim();
    if (selectedText) {
      setSelection(selectedText);
    }
  };

  const handleContextMenu = (e: MouseEvent) => {
    if (selection) {
      e.preventDefault();
      setContextMenuPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleCreateBranch = () => {
    if (selection) {
      onCreateBranch(selection);
      setSelection("");
      setContextMenuPos(null);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    onContentChange(pastedText);
  };

  const handleCloseContextMenu = () => {
    setContextMenuPos(null);
  };

  return (
    <div className="node-display">
      <div
        className="content-area"
        ref={contentRef}
        onMouseUp={handleMouseUp}
        onContextMenu={handleContextMenu}
        onPaste={handlePaste}
        tabIndex={0}
      >
        
        {node.content ? (
          <div className="prose max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {node.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="empty-content">Paste content here...</div>
        )}
      </div>

      {contextMenuPos && (
        <div
          className="context-menu"
          style={{
            position: "absolute",
            top: `${contextMenuPos.y}px`,
            left: `${contextMenuPos.x}px`,
          }}
        >
          <button onClick={handleCreateBranch}>Create Branch</button>
          <button onClick={handleCloseContextMenu}>Cancel</button>
        </div>
      )}
    </div>
  );
}
