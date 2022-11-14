/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"brcomgestao/fiori_app_report_234/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
