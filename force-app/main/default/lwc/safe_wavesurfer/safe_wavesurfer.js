import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import wavesurfer from '@salesforce/resourceUrl/safe_wavesurferlibrary';
import audiomp3 from '@salesforce/resourceUrl/safe_audio';

export default class Safe_wavesurfer extends LightningElement {
       renderedCallback() {
        loadScript(this, wavesurfer)
            .then(() => {
                this.initializeWaveSurfer();
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });
   }
    initializeWaveSurfer() {
        fetch(audiomp3)
            .then((res) => res.blob()) // Gets the static mp3 resource and turns it into a blob
            .then((blob) => {
                this.wavesurferObject = WaveSurfer.create({
                    container: this.template.querySelector('div.wavesurfer'),
                    waveColor: '#D9DCFF',
                    scrollParent: true,
                    progressColor: '#4353FF',
                    cursorColor: '#4353FF',
                    barWidth: 3,
                    barRadius: 3,
                    cursorWidth: 1,
                    height: 200,
                    barGap: 3
                });
                this.wavesurferObject.loadBlob(blob);
                console.log('static resource audio file size? ' + blob.size);
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.log(error);
            });      
    }

    playPauseAudio() {
        this.wavesurferObject.playPause();
    }
}