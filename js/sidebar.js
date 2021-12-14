AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        var cameraOpen = false;
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('main');

        const recorder = document.createElement('xrextras-capture-button');
        recorder.setAttribute('capture-mode', 'standard');

        const record = document.createElement('xrextras-capture-config');
        record.setAttribute('max-duration-ms', '120000');
        record.setAttribute('max-dimension', '1280');
        record.setAttribute('enable-end-card', 'false');
        record.setAttribute('file-name-prefix', 'techcore-ar-');

        const recordPrev = document.createElement('xrextras-capture-preview');
        recordPrev.setAttribute('action-button-share-text', '120000');
        recordPrev.setAttribute('action-button-view-text', '1280');
        recordPrev.setAttribute('finalize-text', 'false');

        // const iOS15Check = () => {
        //     const {os, osVersion, browser} = XR8.XrDevice.deviceEstimate();
        //     const errorText = '';
        //     if (os === 'iOS') {
        //     } 
        //     else {
        //         const download = document.getElementById('downloadButton');
        //         download.innerHTML = 'Download';
        //     }
        // }

        // window.XR8 ? iOS15Check() : window.addEventListener('xrloaded', iOS15Check);

        const closebtn = document.createElement('a');
        closebtn.innerHTML = "x";
        closebtn.setAttribute('href', 'javascript:void(0)');
        closebtn.onclick = this.closeBar;
        closebtn.className = 'closebtn';
        closebtn.id = 'close';
        sidebar.appendChild(closebtn);
        const capturebtn = document.createElement('a');
        capturebtn.setAttribute('href', 'javascript:void(0)');
        capturebtn.innerHTML = '<img id="cameraimg" src="https://techcoreassets.blob.core.windows.net/images/camera.png">';
        capturebtn.onclick = this.openCapture;
        capturebtn.className = 'capturebtn';
        sidebar.appendChild(capturebtn);

        const uploadbtn = document.getElementById('uploadBtn');
        uploadbtn.innerHTML = '<img id="helpimg" src="https://techcoreassets.blob.core.windows.net/images/uploadFile.png">';
        uploadbtn.onclick = this.upload;

        const helpbtn = document.createElement('a');
        helpbtn.setAttribute('href', 'javascript:void(0)');
        helpbtn.innerHTML = '<img id="helpimg" src="https://techcoreassets.blob.core.windows.net/images/help.png">';
        helpbtn.onclick = this.openHelp;
        helpbtn.id = 'help';
        sidebar.appendChild(helpbtn);

        const soundbtn = document.createElement('a');
        soundbtn.setAttribute('href', 'javascript:void(0)');
        soundbtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        soundbtn.onclick = this.playSound;
        soundbtn.id = 'sound';
        main.appendChild(soundbtn);

        const cameraHelp = document.createElement('span');
        cameraHelp.id = 'camHelp'
        cameraHelp.innerHTML = '❮❮❮❮ Click to take photo/video';
        container.appendChild(cameraHelp);
        const fileHelp = document.createElement('span');
        fileHelp.id = 'fileHelp';
        fileHelp.innerHTML = '❮❮❮❮ Click to upload your own file';
        container.appendChild(fileHelp);
        const textCont = document.createElement('div');
        textCont.id = 'textcont';
        container.appendChild(textCont);
        const imgvid = document.createElement('span');
        imgvid.id = 'imgvid';
        imgvid.innerHTML = 'Click to take a photo/Press and hold for video';
        textCont.appendChild(imgvid);

        const openbtn = document.createElement('a');
        openbtn.setAttribute('href', 'javascript:void(0)');
        openbtn.onclick = this.openBar;
        openbtn.innerHTML = "☰";
        openbtn.className = 'openbtn';
        openbtn.id = 'openb';
        main.appendChild(openbtn);

        const donebtn = document.createElement('a');
        donebtn.setAttribute('href', 'javascript:void(0)');
        donebtn.onclick = this.done;
        donebtn.innerHTML = 'Done';
        donebtn.className = 'donebtn';
        donebtn.id = 'done';
        donebtn.style.display = "none";
        main.appendChild(donebtn);
    },

    openCapture: function () {
        //document.getElementById('recorder').style.display = "block";
        cameraOpen = true;
        this.el.sceneEl.appendChild(recorder);
        this.el.sceneEl.appendChild(record);
        this.el.sceneEl.appendChild(recordPrev);

        const iOS15Check = () => {
            const {os, osVersion, browser} = XR8.XrDevice.deviceEstimate();
            const errorText = '';
            if (os === 'iOS') {
            } 
            else {
                const download = document.getElementById('downloadButton');
                download.innerHTML = 'Download';
            }
        }

        window.XR8 ? iOS15Check() : window.addEventListener('xrloaded', iOS15Check);

        textcont.style.display = "block";
        imgvid.style.display = "block";
        sidebar.style.width = "0";
        main.style.display = "block";
        openb.style.display = "none";
        done.style.display = "block";
        camHelp.style.display = "none";
        fileHelp.style.display = 'none';
        document.getElementById('nextbutton').style.display = "none";
    },

    upload: function () {
        fileHelp.style.display = "none";
    },

    openHelp: function () {
        camHelp.style.display = 'block';
        fileHelp.style.display = 'block';
    },

    playSound: function () {
        let video = document.getElementById('vid-cat');
        if (video.muted == false) {
            video.muted = true;
            sound.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
        else {
            video.muted = false;
            sound.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    },

    done: function () {
        if (cameraOpen == true) {
            this.el.sceneEl.removeChild(recorder);
            this.el.sceneEl.removeChild(record);
            this.el.sceneEl.removeChild(recordPrev);
        }

        done.style.display = "none";
        openb.style.display = "block";
        imgvid.style.display = "none";
        textcont.style.display = "none";
        //document.getElementById('recorder').style.display = "none";
        document.getElementById('nextbutton').style.display = "block";
    },

    closeBar: function () {
        sidebar.style.width = "0";
        main.style.display = "block";
        camHelp.style.display = "none";
        fileHelp.style.display = 'none';
    },

    openBar: function () {
        sidebar.style.width = "35%";
        main.style.display = "none";
    }
})