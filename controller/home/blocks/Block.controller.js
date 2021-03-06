sap.ui.define([
	"app/root/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("app.root.controller.home.blocks.Block", {

		onInit : function(){
            this._oResumeModel = this.getModel("Resume");
            // this._oResumeModel = this.getOwnerComponent().getModel("Resume");
            // this.setModel(this._oResumeModel, "Resume");
		},

        onPressLinkedIn : function(oEvent) {
			var sProfileId = this.getModel("Resume").getProperty("/Personal/Social/LinkedIn");
			window.open("https://www.linkedin.com/in/"+sProfileId+"/", "_blank");
		},

		onPressTwitter : function(oEvent) {
            var sProfileId = this.getModel("Resume").getProperty("/Personal/Social/Twitter");
            window.open("https://twitter.com/"+sProfileId+"/", "_blank");
		},

		onPressSAP : function(oEvent) {
			var sProfileId = this.getModel("Resume").getProperty("/Personal/Social/SAP");
			window.open("https://people.sap.com/"+sProfileId);
		},

        onPressSkype : function(oEvent) {
            var sProfileId = this.getModel("Resume").getProperty("/Personal/Social/Skype");
            window.open('skype:'+sProfileId+'?chat');
        },


        onPressEmail : function(oEvent) {

		},

        onDownloadResume : function(oEvent) {
            var link = document.createElement("a");
            link.download = this._oResumeModel.getProperty("/Header/ResumeName");
            link.href = this._oResumeModel.getProperty("/Header/ResumeLocation");
            link.click();
		},

        onExit : function () {
            if (this._oPopover) {
                this._oPopover.destroy();
            }
        },

        onTravelReady: function (oEvent) {
            if (! this._oPopover) {
                this._oPopover = sap.ui.xmlfragment("app.root.view.home.TravelReady", this);
                this.getView().addDependent(this._oPopover);
            }

            this._oPopover.openBy(oEvent.getSource());
        },

        handleCloseButton: function (oEvent) {
            this._oPopover.close();
        }
	});
});