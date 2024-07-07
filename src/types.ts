
export interface FileItem {
    type: 'folder' | 'file';
    id: number;
    name: string;
    meta?: string;
    items?: FileItem[];
  }
  
export interface FolderProps {
  handleDeleteNode: (id: number) => void;
  handleRenameNode: (id: number, newName: string) => void;
  explorer: FileItem;
}

export enum MenuAction {
  delete = "delete",
  rename = "rename",
  copy = "copy",
}

export enum FolderType {
  folder = "folder",
  file = "file",
}