function UriBuilder(url) {
	var hashIndex = url.indexOf('#');
	var withoutHash = hashIndex >= 0 ? url.slice(0, hashIndex) : url;
	var qIndex = withoutHash.indexOf('?');
	this.base = qIndex >= 0 ? withoutHash.slice(0, qIndex) : withoutHash;
	this.params = {};

	if (qIndex >= 0 && qIndex < withoutHash.length - 1) {
		var query = withoutHash.slice(qIndex + 1);
		if (query) {
			query.split('&').forEach(function (pair) {
				if (!pair) return;
				var eq = pair.indexOf('=');
				var rawKey = eq >= 0 ? pair.slice(0, eq) : pair;
				var rawVal = eq >= 0 ? pair.slice(eq + 1) : '';
				var key = decodeURIComponent(rawKey || '');
				var val = decodeURIComponent(rawVal || '');
				if (key === '') return;
				if (Object.prototype.hasOwnProperty.call(this.params, key)) {
					var existing = this.params[key];
					if (Array.isArray(existing)) {
						existing.push(val);
					} else {
						this.params[key] = [existing, val];
					}
				} else {
					this.params[key] = val;
				}
			}, this);
		}
	}
}

UriBuilder.prototype.build = function () {
	var keys = Object.keys(this.params);
	if (keys.length === 0) return this.base;
	var parts = [];
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var value = this.params[key];
		if (value === undefined || value === null) continue;
		if (Array.isArray(value)) {
			for (var j = 0; j < value.length; j++) {
				var v = value[j];
				if (v === undefined || v === null) continue;
				parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(v)));
			}
		} else {
			parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
		}
	}
	return parts.length ? this.base + '?' + parts.join('&') : this.base;
};

// Examples
var exampleRoot = 'http://www.codewars.com';
var builder1 = new UriBuilder(exampleRoot);
builder1.params.page = 1;
builder1.params.language = 'javascript';
console.log('Example 1:', builder1.build());

var builder2 = new UriBuilder(exampleRoot + '?page=1');
builder2.params.page = 2;
console.log('Example 2:', builder2.build());

delete builder2.params.page;
console.log('Example 3:', builder2.build());
