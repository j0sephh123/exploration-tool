interface NavigationProps {
  canGoBack: boolean;
  onGoBack: () => void;
  onSaveSession: () => void;
}

export default function Navigation({
  canGoBack,
  onGoBack,
  onSaveSession,
}: NavigationProps) {
  return (
    <div className="navigation">
      <button className="back-button" onClick={onGoBack} disabled={!canGoBack}>
        Back
      </button>
      <button className="save-button" onClick={onSaveSession}>
        Save Session
      </button>
    </div>
  );
}
