import { useState, FC, MouseEvent } from 'react';
import { FolderProps,MenuAction, FolderType } from "../types";


const Folder: FC<FolderProps> = ({ handleDeleteNode, handleRenameNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    id: number | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    id: null,
  });

  const handleContextMenu = (event: MouseEvent, id: number) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      id,
    });
  };

  const handleAction = (action: string) => {
    if (contextMenu.id !== null) {
      if (action === MenuAction.delete) {
        handleDeleteNode(contextMenu.id);
      } else if (action === MenuAction.rename) {
        const newName = prompt("Enter new name:");
        if (newName) {
          handleRenameNode(contextMenu.id, newName);
        }
      } else if (action === MenuAction.copy) {
        console.log("Copy done");
      }
    }
    setContextMenu({ visible: false, x: 0, y: 0, id: null });
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  if (explorer.type === FolderType.folder) {
    return (
      <div
        style={{ marginTop: 5 }}
        onContextMenu={(e) => handleContextMenu(e, explorer.id)}
      >
        <div onClick={handleExpand} className="folder">
          <span>📁 {explorer.name}</span>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items?.map((item) => (
            <Folder
              key={item.id}
              handleDeleteNode={handleDeleteNode}
              handleRenameNode={handleRenameNode}
              explorer={item}
            />
          ))}
        </div>

        {contextMenu.visible && (
          <div
            className="context-menu"
            style={{ top: contextMenu.y, left: contextMenu.x }}
          >
            <div onClick={() => handleAction(MenuAction.copy)}>Copy</div>
            <div onClick={() => handleAction(MenuAction.delete)}>Delete</div>
            <div onClick={() => handleAction(MenuAction.rename)}>Rename</div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <span
        className="file"
        onContextMenu={(e) => handleContextMenu(e, explorer.id)}
      >
        📄 {explorer.name}
      </span>
    );
  }
};

export default Folder;
