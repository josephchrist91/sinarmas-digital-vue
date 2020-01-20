# GIT - VUE :
git remote show vue

cd D:\dev\documentation\Sinarmas Digital  
git init  
git remote add vue https://github.com/josephchrist91/sinarmas-digital-vue  
git pull vue master  
-- do changes --  
git add .  
git commit -m "Messages"  
git push vue master  


# GIT - PAGES :
-- build vue --

git remote show origin

cd D:\dev\documentation\Sinarmas Digital\docs\.vuepress\dist  
git init  
git remote add origin https://github.com/josephchrist91/sinarmas-digital  
git add .  
git commit -m "Messages"  
git push --force origin master  