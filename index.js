var jsdevops = require('js-devops');


Scoped.define("jsonize:JsonizeDevOpsDF", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
	var Cls = Class.extend({scoped: scoped}, {
		_run: function (payload) {
			return jsdevops.df();
		}
	});
	TaskRegistry.register("devops-df", Cls);
	return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsIWList", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.iwlist(payload.adapter);
        }
    });
    TaskRegistry.register("devops-iwlist", Cls);
    return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsUSBList", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.usblist();
        }
    });
    TaskRegistry.register("devops-usblist", Cls);
    return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsIFConfig", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.ifconfig();
        }
    });
    TaskRegistry.register("devops-ifconfig", Cls);
    return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsDockerPS", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.dockerps();
        }
    });
    TaskRegistry.register("devops-dockerps", Cls);
    return Cls;
});

Scoped.define("jsonize:JsonizeDevOpsReboot", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.reboot();
        }
    });
    TaskRegistry.register("devops-reboot", Cls);
    return Cls;
});


Scoped.define("jsonize:JsonizeDevOpsAddWifi", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.addwifi(payload.ssid, payload.password);
        }
    });
    TaskRegistry.register("devops-addwifi", Cls);
    return Cls;
});


Scoped.define("jsonize:JsonizeDevOpsRemoveWifi", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.removewifi(payload.ssid);
        }
    });
    TaskRegistry.register("devops-removewifi", Cls);
    return Cls;
});


Scoped.define("jsonize:JsonizeDevOpsConnectWifi", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.connectwifi(payload.adapter, payload.ssid, payload.password);
        }
    });
    TaskRegistry.register("devops-connectwifi", Cls);
    return Cls;
});


Scoped.define("jsonize:JsonizeDevOpsWifiDatabase", ["jsonize:AbstractJsonizeTask", "jsonize:JsonizeTaskRegistry"], function (Class, TaskRegistry, scoped) {
    var Cls = Class.extend({scoped: scoped}, {
        _run: function (payload) {
            return jsdevops.wifidatabase();
        }
    });
    TaskRegistry.register("devops-wifidatabase", Cls);
    return Cls;
});
