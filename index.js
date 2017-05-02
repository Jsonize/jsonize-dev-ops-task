var jsdevops = require('js-devops');


Scoped.define("jsonize:JsonizeDevOpsDF", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
	var Cls = Class.extend({scoped: scoped}, {
		_run: function (payload) {
			return jsdevops.df(payload.source);
		}
	});
	TaskRegistry.register("devops/df", Cls);
	return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsIWList", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.iwlist(payload.source);
        }
    });
    TaskRegistry.register("devops/iwlist", Cls);
    return Cls;
});
