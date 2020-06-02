set -e

npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bloodzmoon/svelte-todo.git master:gh-pages

cd -