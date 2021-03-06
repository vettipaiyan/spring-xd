/*
 * Copyright 2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @author Andrew Eisenberg
 * @author Ilayaperumal Gopinathan
 */


/*global requirejs, require, d3, cubism*/

requirejs.config({
	packages: [
		{ name: 'poly', location: '../lib/poly', main:'poly'},
		{ name: 'wire', location: '../lib/wire', main:'wire'},
		{ name: 'meld', location: '../lib/meld', main:'meld'},
		{ name: 'rest', location: '../lib/rest', main:'rest'},
		{ name: 'when', location: '../lib/when', main:'when'}
	],
	paths: {
		jquery: '../lib/jquery/jquery',
		underscore: '../lib/lodash/lodash',
		'text': '../lib/requirejs-text/text',
		'wire/domReady': '../lib/requirejs/domReady',
		'bootstrap-tab': '../lib/bootstrap/js/bootstrap-tab',
		'bootstrap-alert': '../lib/bootstrap/js/bootstrap-alert',
		'bootstrap-modal': '../lib/bootstrap/js/bootstrap-modal',
		'bootstrap-collapse': '../lib/bootstrap/js/bootstrap-collapse',
		'cubism': '../lib/cubism/cubism.v1',
		'd3': '../lib/d3/d3',
		'tipsy': '../lib/tipsy/jquery.tipsy',
		backbone: '../lib/backbone-amd/backbone',
		marionette : '../lib/backbone.marionette/backbone.marionette',
		'backbone.babysitter': '../lib/backbone.marionette/backbone.babysitter',
		'backbone.wreqr': '../lib/backbone.marionette/backbone.wreqr',
		'backbone.modelbinder': '../lib/backbone.modelbinder/backbone.modelbinder',
	},
	shim: {
		'bootstrap-alert': ['jquery'],
		'bootstrap-modal': ['jquery'],
		'bootstrap-collapse': ['jquery'],
		'bootstrap-tab': ['jquery'],
		'tipsy': ['jquery'],
		'cubism': ['d3'],
		backbone : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		},
		marionette : {
			deps: ["backbone", "underscore"],
			exports: "Backbone.Marionette"
		}
	}
});

// load up the wire spec and also load non-amd libraries
require([
	'wire!xd.wirespec', 'd3', 'cubism', 'bootstrap-alert', 'bootstrap-modal',
	'bootstrap-tab', 'bootstrap-collapse']);
