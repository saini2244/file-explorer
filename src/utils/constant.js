export default function getDefaultExplorer(fileExplorer = FileExplorer) {
    return JSON.parse(JSON.stringify(fileExplorer));
}

export const FileExplorer = {
    isFolder: true,
    name: "Files",
    id: 1,
    isParent: true,
    children: [
      {
        name: "root",
        isFolder: true,
        id: 2,
        children: [
          {
            name: "src",
            isFolder: true,
            id: 3,
            children: [
              {
                name: "index.js",
                isFolder: false,
                id: 4,
                children: []
              },
            ],
          }
        ],
      },
    ]
  };