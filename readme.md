    #Git commands
    =============
    git init : initilize empty git repository
    git status : vew the changes to our product code
    git add : add all tracked files to staged area
                eg : git add package.json ==> add only specified file
                     git add . ==> add all files
    git commit : create a new commit with the files in staged area
                eg : git commit -m "initial commit"
    git log : display recent commits  

    git remote add origin git@github.com:fullstacksk/react-expensify-app.git : set repo connection
    git remote : origin
    git remote -v : display fetch/push urls
    git push -u origin master : push all the files to the github repository


    #Generateing new SSH Key
    ========================
    ssh-keygen -t rsa -b 4096 -C "fullstacksk@gmail.com"  : to create ssh key
    ls ~/.ssh : list all ssh files
                    id_rsa
                    id_rsa.pub
    cat ~/.ssh/id_rsa.pub  : read public key
    eval $(ssh-agent -s) : will start sevices and provides p_id
    ssh-add ~/.ssh/id_rsa : add private key on your local machine 
    clip < ~/.ssh/id_rsa.pub : copy public key to clipboard and paste it on github
    ssh -T git@github.com : to check connection with github

