import '../css/FileExplorer.scss';
import FolderActions from './FolderActions';
import RenameFolder from './RenameFolder';


const RenderFiles = ({ file, onAdd, rename, deleteFolder, showInput, onRenameFolder, value, setValue, setShowInput }) => {
      return (<div className="file-container">
          <div className='file-header'>
            <i className="fa fa-light fa-file font-icon"></i>
            {  showInput.rename ?
                <RenameFolder showInput={showInput} value={value} setValue={setValue} onFolderAction={onRenameFolder} setShowInput={setShowInput} />
                :
                <span className='file-name'>{file.name}</span>
            }
          </div>
          <FolderActions
                onAdd={onAdd}
                rename={rename}
                deleteFolder={deleteFolder}
                file={file}
            />
        </div>);
  }

export default RenderFiles;