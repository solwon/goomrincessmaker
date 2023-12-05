interface BoardHeaderProps {
  projectId: number;
  setProjectId: React.Dispatch<React.SetStateAction<number>>;
}

const BoardHeader = (projectId, setProjectId) => {
  return (
    <div className="h-fit w-screen border-b-2 p-6">
      <div className=""></div>
    </div>
  );
};
export default BoardHeader;
