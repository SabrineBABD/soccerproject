// import express module
const express = require('express')
// import bodyParser module
const bodyParser = require('body-parser')
// import mongoose module
const mongoose = require('mongoose');
// import bcrypt module
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const session = require('express-session');

const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer')
const axios = require('axios')


mongoose.connect('mongodb://127.0.0.1:27017/SoccerFS');

const User = require("./models/users")
const Match = require("./models/matches")
const Team = require("./models/teams")
const Player = require("./models/players")

// creation app express
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/jsoneee
app.use(bodyParser.json())

app.use('/images', express.static(path.join('backend/images')))

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

const secretKey = 'croco23';
app.use(session({
    secret: secretKey,
}));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',

}


const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-players-' + '.' +
            extension;
        cb(null, imgName);
    }
})

//Trait Logi Add Match
app.post("/matches", (req, res) => {
    const match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    })

    match.save().then(() => {
        res.json({ message: "match added" })
    })
})

//Trait Logi Get All Matches
app.get("/matches", (req, res) => {
    Match.find().then((docs) => {
        res.json({ matches: docs })
    })
})

//Trait Logi Get  Match By Id
app.get('/matches/:id', (req, res) => {
    Match.findOne({ _id: req.params.id }).then((docs) => {
        res.json({ match: docs })
    })
})


//Trait Logi Get  Delete By Id
app.delete('/matches/:id', (req, res) => {
    Match.deleteOne({ _id: req.params.id }).then(() => {
        res.json({ message: "match deleted" })
    })
})


//Trait Logi Get  Delete By Id
app.put('/matches/:id', (req, res) => {

    Match.updateOne({ _id: req.params.id }, req.body).then(() => {
        res.json({ message: "match updated" })
    })
})


//Trait Logi Signup  

app.post('/api/signup', (req, res) => {


    bcrypt.hash(req.body.password, 10, (err, hashPwd) => {
        console.log("hashPwd", hashPwd);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPwd,
            role: req.body.role,
        })
        user.save((err, docs) => {
            if (err) {
                console.log(err);
                if (err.errors.email) {
                    res.json({ message: "0" })
                }
            } else {
                // console.log('here docs',docs);
                const transporter = nodemailer.createTransport({
                    host: "smtp.office365.com", // hostname
                    secureConnection: false, // TLS requires secureConnection to be false
                    port: 587, // port for secure SMTP
                    auth: {
                        user: 'amir.nasraoui@outlook.com',
                        pass: 'bismilleh2022'
                    },
                    tls: {
                        ciphers: 'SSLv3'
                    }
                });
                const htmlContent = `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background-color: #007bff;
                            color: #fff;
                            text-align: center;
                            padding: 10px;
                        }
                        .content {
                            background-color: #fff;
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Congratulations!</h1>
                        </div>
                        <div class="content">
                            <p> ${req.body.firstName}You have been accepted for the position.</p>
                            <p>Visit our website for more details.</p>
                        </div>
                    </div>
                </body>
                </html>
            `;

                const mailOptions = {
                    from: 'amir.nasraoui@outlook.com',
                    to: req.body.email,
                    subject: 'Welcome To Soccer App',
                    html: htmlContent
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });



                res.json({ message: "1" })
            }

        })


    })


})



app.post("/api/login", (req, res) => {
    let user
    User.findOne({ email: req.body.email })
        .then((findedUser) => {
            user = findedUser
            if (!findedUser) {
                res.json({ message: "0" })
            }
            return bcrypt.compare(req.body.password, findedUser.password)
        })
        .then((correctPwd) => {
            if (!correctPwd) {
                res.json({ message: "1" })
            } else {
              
                let finalUser = {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                }
                const token = jwt.sign(finalUser, secretKey, {
                    expiresIn:
                        '1h'
                })
                res.json({ message: "2", user: token })
            }
        })
})



// here Trai Log ADD Team
app.post("/teams", (req, res) => {
    const team = new Team(req.body)
    team.save().then(() => {
        res.status(201).json({ message: "team added" })
    })
})


//Trait Logi Get All Teams
app.get("/teams", (req, res) => {
    Team.find().populate('players').then((docs) => {
        res.json({ data: docs })
    })
})

//Trait Logi Get  Team by Id
app.get("/teams/:id", (req, res) => {
    Team.findOne({ _id: req.params.id }).populate('players').then((docs) => {
        res.json({ team: docs })
    })
})


// here Trai Log ADD Player
app.post("/players", multer({ storage: storage }).single('image'), (req, res) => {

    if (req.body.teamId) {
        Team.findOne({ _id: req.body.teamId }).then((finededTeam) => {
            if (finededTeam) {
                let url = req.protocol + '://' + req.get('host');
                let imageUrl = url + '/images/' + req.file.filename
                const player = new Player({
                    name: req.body.name,
                    post: req.body.post,
                    number: req.body.number,
                    teamId: req.body.teamId,
                    image: imageUrl,
                })
                player.save((err, docs) => {
                    if (err) {
                        console.log(err);

                    } else {
                        finededTeam.players.push(docs._id)
                        Team.updateOne({ _id: req.body.teamId }, finededTeam).then(() => {
                            res.status(201).json({ message: "player added" })
                        })
                    }

                })
            }
            else {
                res.status(201).json({ message: "0" })

            }


        })
    }





})

//Trait Logi Get All Player
app.get("/players", (req, res) => {
    Player.find().populate('teamId').then((docs) => {
        res.json({ data: docs })
    })
})

app.post("/players/filter", (req, res) => {
    Player.find({ number: { $gte: req.body.gte, $lte: req.body.lte } }).then((findedPlayers) => {
        res.json({ players: findedPlayers })
    })
})

app.get("/weather", (req, res) => {
    const lat = 36.8454046
    const lon = 10.1835483
    const key = "4a99078b01f5ad98864e26e9e216c918"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`).then((result) => {
        console.log(res.data);
        res.json({ data: result.data })
    })
})

app.get("/api/teams", (req, res) => {

    axios.get('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=3b133ad0-a1c0-11eb-80a8-f777ca078eb8&country_id=119').then((result) => {
        console.log(res.data);
        res.json({ data: result.data })
    })
})

// make app exportable
module.exports = app