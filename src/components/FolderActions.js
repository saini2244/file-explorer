import '../css/FileExplorer.scss';

const FolderActions = ({onAdd, rename, deleteFolder, file}) => {
    return (
        <div className="action-container">
            {
                !file.isParent && 
                <i className="fa fa-solid fa-edit" onClick={(event) => rename(event, file)}></i>
            }
            {
                file.isFolder && 
                <>
                    <i className="fa fa-solid fa-file" onClick={(event) => onAdd(event, false)}></i>
                    <i className="fa fa-solid fa-folder" onClick={(event) => onAdd(event, true)}></i>
                </>
            }
            {
                !file.isParent && 
                <i className="fa fa-solid fa-trash" onClick={() => deleteFolder(file)}></i>
            }
        </div>
    );
  }

  export default FolderActions;