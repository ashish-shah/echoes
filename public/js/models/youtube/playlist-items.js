// a playlists service to create new playlists
define(['underscore', 'backbone', '../gapi'], function(_, Backbone, Gapi) {

	var history = Gapi.extend({

		url: function() {
			return gapi.client.youtube.playlistItems;
		},

		// for autorization
		scopes: "https://www.googleapis.com/auth/youtube",

		// for client api to be loaded after autorization
		client: {
			api: 'youtube',
			version: 'v3'
		},

		initialize: function(id) {
			// this.connect();
		},

		// currently, describes the "create" json
		methods: {
			list: {
				part: 'snippet',
				maxResults: 50,
				playlistId: ''
			}
		},

		defaults: {},

		setId: function(id){
			this.methods.list.playlistId = id;
		},

		hasId: function() {
			return this.methods.list.playlistId !== '';
		}
	});

	return history;
});