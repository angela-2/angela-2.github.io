'use strict';

const cluster = require('cluster');
const compression = require('compression');
let workers = Number;
const cpus = require('os').cpus();
const nodemailer = require('nodemailer');
const email = process.env.PASSWORD;
const env = process.env.NODE_ENV || 'development';
const emailAddress = process.env.EMAILADDRESS;
const transporter = nodemailer.createTransport({
	host: 'mail.privateemail.com',
	port: 465,
	auth: {
		user: emailAddress,
		pass: email
	}
});


if(cluster.isMaster){
	workers = cpus.length;
	console.log(cpus);
	console.log(`Cluster is setting up ${workers} workers...`)
	for(let i = 0; i<workers; i++){
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal)=>{
		console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal ${signal}`);
		console.log(`Starting new worker...`);
		cluster.fork();
	})

}else{
	const express = require('express');
	const bodyParser = require('body-parser');
	const app = express();
	/*const forceSsl = (req, res, next)=>{
		if (req.headers['x-forwarded-proto'] !== 'https') {
        	return res.redirect(['https://', req.get('Host'), req.url].join(''));
    	}
    	return next();
	}*/
	app.use(compression());
	console.log(env);
	/*if(env === 'production'){
		app.use(forceSsl)
	}*/

	const port = process.env.PORT || 5000;

	app.set('port', port);

	// app.use(express.static(process.cwd() + '/build'));
	app.use(express.static(process.cwd()));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.listen(app.get('port'), (req, res)=>{
		console.log(`Worker ${cluster.worker.id} listening on port ${port}`);
	});
}

