
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