const useExplorerActions = () => {
  const addNewFolderById = function (explorer, id, newItem, isFolder = false) {
    if (explorer.id === id && explorer.isFolder) {
      explorer.children.unshift({
        id: new Date().getTime(),
        name: newItem,
        isFolder: isFolder,
        children: []
      });

      return explorer;
    }

    let latestNode = [];
    latestNode = explorer.children.map((ob) => {
      return addNewFolderById(ob, id, newItem, isFolder);
    });

    return { ...explorer, children: latestNode };
  };

  const deleteFolderFolderById = (explorer, id) => {
    if(explorer.id === id) {
      return false;
        }
      if (explorer.children && explorer.children.length > 0) {
        explorer.children = explorer.children.filter(child => deleteFolderFolderById(child, id));
      }

      return { ...explorer };
  };

  const renameFolderById = (explorer, id, value) => {
      if(explorer.id === id) {
        return { ...explorer, name: value};
      }
      let latestNode = [];
      latestNode = explorer.children.map((ob) => {
        return renameFolderById(ob, id, value);
      });
  
      return { ...explorer, children: latestNode };
  };

  return [ addNewFolderById, deleteFolderFolderById, renameFolderById ];
};

export default useExplorerActions;