import {FileItem} from '../types'

const useTraverseTree = () => {
  const deleteNode = (tree: FileItem, id: number): FileItem | null => {
    if (tree.id === id) {
      return null; 
    }

    if (tree.items) {
      tree.items = tree.items
        .map((ob) => deleteNode(ob, id))
        .filter((item) => item !== null) as FileItem[]; 
    }

    return tree;
  };

  const renameNode = (
    tree: FileItem,
    id: number,
    newName: string
  ): FileItem => {
    if (tree.id === id) {
      tree.name = newName;
      return tree;
    }

    if (tree.items) {
      tree.items = tree.items.map((ob) => renameNode(ob, id, newName));
    }

    return tree;
  };

  return {  deleteNode, renameNode };
};

export default useTraverseTree;
