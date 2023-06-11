import '../css/FileExplorer.scss';


const RenameFolder = ({ showInput, onFolderAction, value, setValue, setShowInput }) => {
      return (
        <div className="input-container">
            {
                showInput.addNew && 
                <i className={"font-icon fa fa-solid " + (showInput.isFolder ? "fa-folder" : "fa-file")}></i>
            }
            <input
                type="text"
                className="input-text"
                autoFocus
                onInput={(event) => setValue(event.target.value)}
                value={value}
                onKeyDown={onFolderAction}
                onBlur={() => setShowInput({ ...showInput, addNew: false, rename: false })}
            />
        </div>
      );
  }

export default RenameFolder;