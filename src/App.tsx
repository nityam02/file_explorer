import { useState } from 'react';

import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';
import './App.css';
import { explorer } from './data/folderData';
import {FileItem} from './types'

export default function App() {
  const [explorerData, setExplorerData] = useState<FileItem>(explorer);

  const { deleteNode, renameNode } = useTraverseTree();

  const handleDeleteNode = (id: number) => {
    const updatedTree = deleteNode(explorerData, id);
    if (updatedTree !== null) {
      setExplorerData(updatedTree);
    }
  };

  const handleRenameNode = (id: number, newName: string) => {
    const updatedTree = renameNode(explorerData, id, newName);
    setExplorerData(updatedTree);
  };

  return (
    <div className="App">
      <Folder
        handleDeleteNode={handleDeleteNode}
        handleRenameNode={handleRenameNode}
        explorer={explorerData}
      />
    </div>
  );
}