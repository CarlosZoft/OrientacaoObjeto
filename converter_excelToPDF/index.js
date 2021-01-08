const fs = require('fs');

function modifyUser(name,course, category){
    fs.readFile("./user.json",{encoding : "utf8"}, (err,about)=>{
        if(err){
            console.log(err);
        }
        else{
            var user = JSON.parse(about);
            user.name = name;
            user.course = course;
            user.category = category;
            fs.writeFile("./user.json", JSON.stringify(user), (err) => {
                if(err){
                    console.log(err)
                }
            })
          
        }

    }); 
}
modifyUser("Carlos Rafael", "Engineer of Software", "Web Developer");