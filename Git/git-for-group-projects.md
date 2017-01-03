#Git for group projects

1. `git pull` From master at the beginning of each day. 
2. `git checkout -b feature` everytime you are working on a new featureName
3. `git add .` dont ever add keys, npm modules, or anything of the sort. 
4. `git commit -m "message"` 
5. `git checkout master`
6. `git pull` 
7. `git checkout -b newFeature`
8. `git merge master`

3 different things can happen durring this process 

1. FastForward
2. Merge Commit 
3. Merge Conflicts 
  - fix conflicts
  $ `git push origin newFeature`

# For Removing sensitive information from GitHub
`git filter-branch --force --index-filter \ 'git rm --cached --ignore-unmatch ./config.js' \--prune-empty --tag-name-filter cat -- --all`
When you're done, force push. 

# For Undoing a bad commit/push 
$ `git reset HEAD^ --hard`
$ `git push nameOfBranch -f`

# To reset to specific HEAD
$ `git reset --hard c14809fa`