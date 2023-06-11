import { useState } from "react";
import RenderFiles from "./File";
import '../css/FileExplorer.scss';
import FolderActions from "./FolderActions";
import RenameFolder from "./RenameFolder";

const Folder = ({ files, add, rename, deleteFolder }) => {
    const [expanded, setExpanded] = useState(false);
    const [showInput, setShowInput] = useState({
        addNew: false,
        rename: false,
        isFolder: false
      });
    const [value, setValue] = useState("");

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpanded(true);
        setValue("");
        setShowInput({
            addNew: true,
            rename: false,
            isFolder
        });
      };
    
      const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
          add(files.id, e.target.value, showInput.isFolder);
    
          setShowInput({ ...showInput, addNew: false, rename: false });
        }
      };

      const handleRenameFolder = (e, file) => {
        e.stopPropagation();
        setExpanded(true);
        setValue(file.name)
        setShowInput({
            addNew: false,
            rename: true,
            isFolder: file.isFolder
        });
      };
    
      const onRenameFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
          rename(files, e.target.value, showInput.isFolder);
    
          setShowInput({ ...showInput, addNew: false, rename: false });
        }
      };


      return (
        <div className="folder-container">
            {files.isFolder ?
                <>
                    <div className="folder-actions">
                        <div className="folder-header">
                            {
                                files.isParent ?
                                    <i onClick={() => setExpanded(!expanded)} className={"font-icon fa fa-sharp fa-solid fa-chevron" + (expanded ? "-down" : "-up")}></i>
                                :
                                <i onClick={() => setExpanded(!expanded)} className={"font-icon fa fa-solid fa-folder" + (expanded ? "-open" : "")}></i>
                            }
                            {showInput.rename ? (
                                <RenameFolder showInput={showInput} value={value} setValue={setValue} onFolderAction={onRenameFolder} setShowInput={setShowInput} />
                            )
                            :
                                <span className="folder-name" onClick={() => setExpanded(!expanded)}>{files.name}</span>
                            }
                        </div>
                        <FolderActions
                            onAdd={handleNewFolder}
                            rename={handleRenameFolder}
                            deleteFolder={deleteFolder}
                            file={files}
                    />
                    </div>
                    <div className="expanded"
                    style={{ display: expanded ? "block" : "none" }}>
                        {showInput.addNew && (
                            <RenameFolder showInput={showInput} value={value} setValue={setValue} onFolderAction={onAddFolder} setShowInput={setShowInput} />
                        )}
                    {files.children.map((file) => {
                        return <Folder key={file.id} files={file} add={add} deleteFolder={deleteFolder} rename={rename} />;
                    })}
                    </div>
                </>
            :
            <RenderFiles 
                onAdd={handleNewFolder}
                deleteFolder={deleteFolder}
                rename={handleRenameFolder}
                file={files}
                showInput={showInput} value={value} setValue={setValue} onRenameFolder={onRenameFolder} setShowInput={setShowInput}
            />
            }
        </div>      
    );
  }

  export default Folder;