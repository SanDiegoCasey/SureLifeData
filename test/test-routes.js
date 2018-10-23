'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('the index page', function() {
	it('should exist', function() {
		return chai
			.request(app)
			.get('/')
			.then(function(res) {
				expect(res).to.have.status(200);
			});
	});
});

describe('the login page', function() {
	it('should exist', function() {
		return chai
			.request(app)
			.get('/login.html')
			.then(function(res) {
				expect(res).to.have.status(200);
			});
	});
});
