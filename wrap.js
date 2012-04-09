/** @license
 * RequireJS Wrap Plugin
 * Author: Gabriel Giannattasio
 * Created on: 2012/04/05
 * Version: 0.0.2
 * Released under the MIT license
 */
(function () {define({
    load : function(name, req, onLoad, config){
        if(!config.wrapper) config.wrapper = {};
        var cfg = config.wrapper;
        if(!cfg.globals) cfg.globals = {};
        if(!cfg.deps) cfg.deps = {};

        var toLoad = (cfg.deps[name] instanceof Array)? cfg.deps[name] : [];

        toLoad.push(name);

        req(toLoad, function () {
            var name = toLoad[arguments.length-1];
            var r = arguments[arguments.length-1];
            var global;
            if(cfg.globals[name] && typeof cfg.globals[name] === "function") {
                global = cfg.globals[name]();
            } else if(cfg.globals[name]) {
                if(r) this[cfg.globals[name]] = r;
                global = this[cfg.globals[name]];
            }
            onLoad(r || global);
        });
    }
});}());
