// deployTest.js
const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const users = require('./clubUsersHash.json');
const app = express();
app.use(express.static('public')); //show public folder to express for css file
const nunjucks = require('nunjucks');
const session = require('express-session');
const eventData = require('./eventData.json');
const studentInfo = require('./studentInfo.json');

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});


let host = '127.0.0.1';
let port = '3030';
let info =  {eventData: eventData, studentInfo:studentInfo}
let memberApplications = [];
let name;
let choice;
let email;
let comment;
let urlencodedParser = express.urlencoded({extended: true});

const cookieName = "racc00nb0yz"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'website development CSUEB',
	resave: false,
	saveUninitialized: false,
	name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
	console.log(`session object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {
            role: 'guest'
		};
	}
	next();
};

app.use(setUpSessionMiddleware);

// Use this middleware to restrict paths to only logged in users
const checkLoggedInMiddleware = function (req, res, next) {
	console.log(`CURRENT ROLE: ${req.session.user.role}`);
    if (req.session.user.role === 'guest') {
        res.render("Forbidden.njk");
	} 
    else {
		next();
	}
};

// Use this middleware to restrict paths to only admins
const checkAdminMiddleware = function (req, res, next) {
	console.log(`CURRENT ROLE: ${req.session.user.role}`);
    if (!(req.session.user.role === 'admin')) {
        res.render("Forbidden.njk");
	} 
    else {
		next();
	}
};


//Services for all
app.get('/', function (req, res) {
    res.render('clubIndex.njk', {
        user: req.session.user
    });
});
app.get('/login', function (req, res) {
    res.render('clubLogin.njk', {
        user: req.session.user
    });

});
app.get('/application', function (req, res) {
    res.render('clubApplication.njk', {
        user: req.session.user
    });
});
app.get('/serverId', function (req, res) {
    res.render('serverId.njk', info);
});

//Member only services
app.get('/activities', checkLoggedInMiddleware, function (req, res) {
    res.render('clubActivities.njk', {
		eventData: eventData,
        user: req.session.user
	});
});
app.get('/logout', checkLoggedInMiddleware, function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.render("goodbye.njk");
	})
});


//Admin only services
app.get('/addActivityForm', checkAdminMiddleware, function (req, res) {
	res.render('addActivity.njk', {
		user: req.session.user
	});
});
// Only available to logged in members
app.get('/users', checkAdminMiddleware, function (req, res) {
    res.render('users.njk', {
		users: users,
		user: req.session.user
	});
});

app.get('/addActivity', checkAdminMiddleware, function (req, res) {
	let temp = req.query;
	console.log(temp);
	// Note need to check input here to prevent injection attacks
	let activity = {
		name: temp.name,
		dates: temp.dates,
        times: temp.times,
        description: temp.description
	};
    console.log(eventData);
	eventData.myEvents.push(activity);
    console.log(eventData);
    if (eventData.length > 100) { // only keep the last 100 activities added
        eventData.shift(); // removes the first item
    }
	res.redirect('/activities');
});

// Respond to post request from form page. Membership application handler
app.post('/membershipSignup', urlencodedParser, function(req, res) {
    memberApplications.push(req.body);
    let salt = bcrypt.genSaltSync(13);
    let passHash = bcrypt.hashSync(memberApplications[(memberApplications.length)-1].password, salt);
    memberApplications[(memberApplications.length)-1].password = passHash;
    console.log("Membership Signup Called:");
    console.log(memberApplications);
    let infoSignup = {name:memberApplications[0].name, email:memberApplications[0].email,
        choice:memberApplications[0].choice, comment:memberApplications[0].comments};
    res.render('thanks.njk', {
        infoSignup,
        user: req.session.user
    });
});

// Respond to post request from form page. Login handler
app.post('/logon', urlencodedParser, function (req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    // Find user
    let auser = users.find(function (user) {
        return user.email === email
    });
    if (!auser) {// Not found
        res.render("loginError.njk");
        return;
    }
    let verified = bcrypt.compareSync(password, auser.passHash);
    if (verified) {
        // Upgrade in privilege, should generate new session id
        // Save old session information if any, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            if (err) {
                console.log(err);
            }
            req.session.user = Object.assign(oldInfo, auser, {
				loggedin: true
			});
            res.render("welcome.njk", {user: auser});
        });
    } else {
        res.render("loginError.njk");
    }
});

app.listen(port, host, function () {
console.log(`clubServer.js app listening on IPv4: ${host}:${port}`);
});