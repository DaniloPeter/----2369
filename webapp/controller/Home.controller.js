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
      onInit() {
        const currentDate = new Date();
        this.getView().byId("dateTimePicker").setDateValue(currentDate);
      },

      onSwitchChange(oEvent) {
        const newState = oEvent.getParameter("state");
        const sId = oEvent.getParameter("id");
        const oModel = this.getView().getModel("data");

        if (sId.includes("downTime"))
          oModel.setProperty("/switch/downTime", newState);
        if (sId.includes("defect"))
          oModel.setProperty("/switch/defect", newState);
      },

      onDisruptWeightChange(oEvent) {
        const newValue = oEvent.getParameter("value");
        const oModel = this.getView().getModel("data");
        const defectSwitch = this.getView().byId("defectSwitch");

        if (newValue && parseFloat(newValue) > 50) {
          oModel.setProperty("/switch/defect", true);
          defectSwitch.setState(true);
        } else {
          oModel.setProperty("/switch/defect", false);
          defectSwitch.setState(false);
        }
      },

      calculateOverprint() {
        const printMeters =
          parseFloat(this.getView().byId("printMeters").getValue()) || 0;
        const reportLength =
          parseFloat(this.getView().byId("reportLength").getValue()) || 0;

        if (reportLength !== 0) {
          const overprint = printMeters / (reportLength * 0.01);
          this.getView().byId("overprint").setValue(overprint.toFixed(2));
        } else {
          this.getView().byId("overprint").setValue(0);
        }
      },

      onPrintMetersChange() {
        this.calculateOverprint();
      },

      onReportLengthChange() {
        this.calculateOverprint();
      },
    });
  }
);
