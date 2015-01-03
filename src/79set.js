/*
//
// SET for Alasql.js
// Date: 01.12.2014
// (c) 2014, Andrey Gershun
//
*/

yy.SetVariable = function (params) { return yy.extend(this, params); }
yy.SetVariable.prototype.toString = function() {
	var s = K('SET')+' ';
	s += K(this.variable)+' '+(this.value?'ON':'OFF');
	return s;
}

yy.SetVariable.prototype.execute = function (databaseid,cb) {
	var val = this.value;
	if(val == 'ON') val = true;
	if(val == 'OFF') val = false;

	alasql.vars[this.variable] = val;
	// if(typeof this.autocommit != 'undefined') {
	// 	alasql.vars.autocommit = this.autocommit;
	// }
	var res = 1;
	if(cb) res=cb(res);
	return res;
};

