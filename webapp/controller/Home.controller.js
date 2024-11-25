sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
  ],
  (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";
    return Controller.extend("ui5.testapp.controller.Home", {
      onSwitchChange(oEvent) {
        const newState = oEvent.getParameter("state");
        const sId = oEvent.getParameter("id");
        const oModel = this.getView().getModel("data");

        if (sId.includes("downTime"))
          oModel.setProperty("/switch/downTime", newState);
        if (sId.includes("defect"))
          oModel.setProperty("/switch/defect", newState);
      },
    });
  }
);
