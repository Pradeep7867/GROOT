import path from 'path';

class Groot
{
  constructor(repoPath = '.')
  {
    // Set the path to the Groot repository
    // This can be overridden by setting the GROOT_REPO_PATH environment variable
    this.repoPath = path.join(repoPath, '.groot');
    // Set the path to the Groot objects directory
    this.objectsPath = path.join(this.repoPath, 'objects');

  }
}