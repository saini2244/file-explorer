import { useEffect, useState } from "react";
import getDefaultExplorer from "../utils/constant";
import Folder from "./Folder";
import useExplorerActions from "../custom-hooks/useExplorerActions.js";

const FileExplorer = () => {
    const [files, setFiles] = useState([]);
    const [ addNewFolderById, deleteFolderFolderById, renameFolderById ] = useExplorerActions();

    const add = (folderId, item, isFolder) => {
        const finalExplorer = addNewFolderById(getDefaultExplorer(files), folderId, item, isFolder);
        setFiles(finalExplorer);
    }

    const deleteFolder = (folderId) => {
        const finalExplorer = deleteFolderFolderById(getDefaultExplorer(files), folderId.id);
        setFiles(finalExplorer);
    }

    const rename = (folderId, value) => {
        const finalExplorer = renameFolderById(getDefaultExplorer(files), folderId.id, value);
        setFiles(finalExplorer);
    }

    useEffect(() => {
        const files = getDefaultExplorer();
        setFiles(files);
    }, [])

    return (
        <div className="explorer-container">
            <Folder files={files} add={add} deleteFolder={deleteFolder} rename={rename}/>
        </div>
    )
  }

  export default FileExplorer;