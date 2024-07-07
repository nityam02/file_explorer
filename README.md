# File Explorer Component

This is a simple file explorer component built with React and TypeScript. The component allows you to create folders and files, delete and rename them using a context menu.

## Features

- Render folders and files from a nested data structure.
- Expand and collapse folders to show their contents.
- Right-click context menu to copy, delete, and rename files and folders.


## Installation

1. Clone the repository:

   ```sh
   https://github.com/nityam02/file_explorer.git
   cd file-explorer

2. Run `yarn` to install dependencies.

3. Run `yarn dev` to start the localhost server.

4. Open `http://localhost:5173/` in browser or the URL mentioned in terminal.


### Component Structure:
#### 1. components: All the components
- **Folder**:
 **handleAction**: The handleAction function now correctly performs actions (delete, rename, copy) based on the contextMenu.id. It ensures that the actions are performed at the correct node level in the file tree.

**handleExpand**: This function toggles the expansion of folder items.



#### 2. hooks: custom hooks
**deleteNode**: The deleteNode function now correctly deletes the node specified by id from the file tree structure.
**renameNode**: The renameNode function correctly renames the node specified by id to newName in the file tree structure.

#### 3. test: folder to contain all test files
- **App.test.tsx** - 
