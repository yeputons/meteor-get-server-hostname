Package.describe({
  summary: "Provides 'getServerHostname' function for debugging purposes"
});

Package.on_use(function (api, where) {
  api.add_files('get-server-hostname.js', ['server']);
  api.export('getServerHostname');
});
