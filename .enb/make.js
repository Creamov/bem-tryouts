module.exports = function(config) {
    config.setLanguages(["ru", "en"]);
    config.mode("development", function() {

    });
    config.mode("production", function() {

    });

    config.node("desktop.bundles/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb-bh/techs/bh-server-include'), , { jsAttrName: 'data-bem', jsAttrScheme: 'json' } ],
            require('enb/techs/files'),
            require('enb/techs/deps-old'),
            require("enb/techs/bemdecl-from-bemjson"),
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            [ require("enb/techs/levels"), {levels: getLevels()} ],

        //     require("enb/techs/deps-old"),
            require("enb/techs/css"),
            [ require("enb-diverse-js/techs/browser-js"), { target: '?.js'} ],
        //     [ require("bh/techs/bh-server"), { jsAttrName: 'data-bem', jsAttrScheme: 'json' } ],
            [ require("enb/techs/html-from-bemjson"), { bemhtmlTarget: '?.bh.js' } ]
        ]);

        nodeConfig.addTargets(["?.css", "?.js", "?.bh.js", "?.html"]);

        // , 

        function getLevels() {
            return [
                {"path":"bower_components/bem-core/common.blocks","check":true},
                {"path":"bower_components/bem-core/desktop.blocks","check":true},
                {"path":"desktop.blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
};
