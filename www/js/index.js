"use strict";

var cameraAvailable = false;

var phonegap = {};

phonegap.app = {
	
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
        FastClick.attach(document.body);

        cameraAvailable = true;
    },
    
    takePhoto: function() {
        if (!cameraAvailable) {
            return;
        }

        navigator.camera.getPicture(phonegap.app.onPhotoDataSuccess, phonegap.app.onPhotoFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL
        });
    },

    onPhotoDataSuccess: function(imageData) {
        var imageTag = document.getElementById('image_locator');
        imageTag.src = "data:image/jpeg;base64," + imageData;
    },

    onPhotoFail: function() {
        alert('No he podido hacer la foto!');
    },

    getPhoto: function() {
        if (!cameraAvailable) {
            return;
        }

        navigator.camera.getPicture(phonegap.app.onPhotoDataSuccess, phonegap.app.onPhotoFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.DATA_URL,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
    }

};
