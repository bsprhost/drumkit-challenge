

class clsDrumKitMgr {
    constructor(newClickSounds, objNewKeySounds) {
        this.clickSounds = newClickSounds;
        this.keySounds = objNewKeySounds;

        this.putBtnsOnScreen();
    }

    putBtnsOnScreen = () => {
        this.clickSounds.forEach(strAudName => {
            let intIndex = 0;
            const domButtons = document.getElementById("btn-panel");
            const domBtn = document.createElement('button');
            domBtn.classList.add('btn');
            domBtn.innerText = strAudName;

            domButtons.appendChild(domBtn);
            intIndex++;
        })
    }

    stopPrevTracks = () => {
        this.clickSounds.forEach(strAudName => {
            const track = document.getElementById(strAudName)
    
            track.pause()
            track.currentTime = 0;
        })
    }

    playClickSound = (strAudInHTML) => {
        const domAudFile = document.getElementById(strAudInHTML)

        domAudFile.play()        
    }

    playKeySound = (strKeyCode) => {
        let strKeyValue = "";
        for(const entry of Object.entries(this.keySounds)) {
            strKeyCode = strKeyCode.toUpperCase();
            if (entry[0] == strKeyCode) {
                strKeyValue = entry[1];
                break;
            }
        }
        const domAudFile = document.getElementById(strKeyValue);
        domAudFile.play();        
    }
}

// Listen for click events
document.addEventListener("click", (event) => {
    objDrumKitMgr.stopPrevTracks
    objDrumKitMgr.playClickSound(event.target.innerHTML);
});

// Listen for key events
document.addEventListener("keydown", (event) => {
    objDrumKitMgr.stopPrevTracks
    objDrumKitMgr.playKeySound(event.key);
});

clickSounds = ['boom',
                'clap',
                "hihat", 
                'kick', 
                'openhat', 
                'ride',
                'snare',
                'tink',
                'tom'] 

objKPressSnds = {"A":"boom",
                "S":"clap",
                "D":"hihat",
                "F":"kick",
                "G":"openhat",
                "H":"ride",
                "J":"snare",
                "K":"tink",
                "L":"tom"}
                
const objDrumKitMgr = new clsDrumKitMgr(clickSounds, objKPressSnds);





