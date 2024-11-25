sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("ui5.testapp.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init() {
        UIComponent.prototype.init.apply(this, arguments);

        const oData = {
          downTimeSwitch: false,
          defect: false,
          line: 5,
          order: 2,
          engineer: 3,
          downTime: 1,
          shift: 1,
        };

        const oModel = new JSONModel(oData);
        this.setModel(oModel, "data");

        this.getRouter().initialize();
      },
    });
  }
);
