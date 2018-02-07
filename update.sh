echo "update" > provokeUpdate.txt
git add .
git commit -m "save"
git push origin master
git push heroku master
