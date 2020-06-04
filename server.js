var express=require('express');
var cors=require('cors');
var path=require('path');
var url=require('url');

var app=express();

//app.set('view engine','ejs');

//app.set('views',path.join(__dirname,'views'));

var datalist=[
    {
        userid: "vidhi987",
        password: "vidhipassword",
        name: "Vidhi Dixit",
        company: "Student",
        country: "India",
        college: "AKGEC",
        image: "images/women-vector.jpg",
        description: "A college student with an ambition to be a part of the world of Software Engineering",
        skills: ["C Programming","C++","Java Core", "HTML", "CSS","Big Data Analytics","JavaScript"]
    },
    {
        userid: "gaurav",
        password: "gauravpassword",
        name: "Gaurav Chauhan",
        company: "Medicops",
        country: "India",
        college: "xyz",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "devansh",
        password: "devanshpassword",
        name: "Devansh Srivastava",
        comapny: "MIT UJN",
        country: "India",
        college: "xyz",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "riddhi",
        password: "riddipassword",
        name: "Riddi Sehgal",
        company: "Student",
        country: "India",
        college: "AKGEC",
        image: "images/women-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "dainik",
        password: "dainikpassword",
        name: "Dainik Singh",
        company: "IBM",
        country: "India",
        college: "IMS",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    },
    {
        userid: "viraj",
        password: "virajpassword",
        name: "Virag Mishra",
        company: "Student",
        country: "India",
        college: "IMS",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    }
];
app.use(cors());
//app.use(express.static(__dirname+'/public'));
//app.get('/', (req, res) => {
 //   res.render('index');
//});
app.get('/login',(req,res)=>{
        var user=req.query.userid;
        var pass=req.query.password;
        var id=req.query.id;
        console.log(user);
        console.log(pass);
        var i;
        for(i=0;i<datalist.length;i++)
        {
            if(user===datalist[i].userid&&pass===datalist[i].password)
            {
                res.send( JSON.stringify(datalist[i].name) );
                break;
            }
        
        }
        if(i===datalist.length)
        res.send('not found');

});
app.get('/profile',(req,res)=>{
    res.send(JSON.stringify(datalist));
});
app.get('/search',(req,res)=>{
    var filtereddata=[];
    var id=req.query.id;
    var search=req.query.name;
  //  console.log(search);
    for(var i=0;i<datalist.length;i++)
    {
       // console.log(req.query.name);
        if(datalist[i].name.includes(search)||datalist[i].userid.includes(search))
        {
            filtereddata.push(datalist[i]);
        }
    }
    res.send(JSON.stringify(filtereddata));
});
app.listen(8084);