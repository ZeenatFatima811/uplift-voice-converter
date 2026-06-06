const UPLIFT_API_KEY = "sk_api_504458d215b6cb3fd317524d690f7f5c30eb1c1d87bef4d71b8c092dea9a402a";

//Text to speech conversion logic
async function textToSpeech(text) {
    try {
        const payload={
            voiceId: "street-vendor",
            text: text,
            outputFormat: "MP3_22050_32",
        }

        const response= await fetch("https://api.upliftai.org/v1/synthesis/text-to-speech",{
            method:"POST",
            headers:{
                Authorization: `Bearer ${UPLIFT_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if(!response.ok){
            const err=await response.text();
            console.log("Err", err);
            return;
        }

        const audioBlob= await response.blob();
        const audioURL=URL.createObjectURL(audioBlob);

        const audio= new Audio(audioURL);
        audio.play();
    } catch (error) {
        console.log("Network Error", error);
    }
    
}

function Speech(){
    const text= document.getElementById("inputField").value;
    textToSpeech(text);
} 


//Speech to text conversion logic
let mediaRecorder;
let audioChunks=[];

async function startRecording(){
    const stream= await navigator.mediaDevices.getUserMedia({
        audio: true,
    });

    mediaRecorder= new MediaRecorder(stream);

    audioChunks=[];

    mediaRecorder.ondataavailable=(event)=>{
        audioChunks.push(event.data);
    };

    mediaRecorder.start();
    document.getElementById("status").innerText="Recording...";
}

function stopRecording(){
    mediaRecorder.stop();
    
    mediaRecorder.onstop=()=>{
        const audioBlob=new Blob(audioChunks, {
            type: "audio/webm",
        });

        document.getElementById("status").innerText="Recording Complete";
        speechToText(audioBlob);

    }
}

async function speechToText(audioBlob){
    const formData= new FormData();
    formData.append("file", audioBlob, "recording.webm");

    const response= await fetch("https://api.upliftai.org/v1/transcribe/speech-to-text", {
        method: "POST",
        headers:{
            Authorization: `Bearer ${UPLIFT_API_KEY}`,
        },
        body: formData,
    });

    const data= await response.json();
    console.log(data);
    
    document.getElementById("status").innerText=data.transcript || "No text recieved";
}

