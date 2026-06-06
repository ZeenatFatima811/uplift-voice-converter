# Voice Conversion Project (Speech-to-Text & Text-to-Speech)

This is a simple web-based voice processing project built using HTML, CSS, and JavaScript. It implements Speech-to-Text and Text-to-Speech functionality using browser APIs and Uplift AI API.

---

## Features

### Speech-to-Text (STT)
- Records audio using the browser microphone (MediaRecorder API)
- Converts speech into text using Uplift AI Speech-to-Text API
- Displays converted text on the screen

### Text-to-Speech (TTS)
- Takes text input from the user
- Converts text into spoken audio
- Plays audio directly in the browser

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- MediaRecorder API (for audio recording)
- Uplift AI API (for Speech-to-Text conversion)
- Web Speech API / TTS API (for Text-to-Speech)

---

## Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### Speech-to-Text Flow

1. User clicks Start Recording  
2. Browser requests microphone permission  
3. Audio is recorded using MediaRecorder API  
4. Audio chunks are stored in an array  
5. Chunks are combined into a Blob file  
6. Blob is sent to Uplift AI Speech-to-Text API using fetch()  
7. API returns transcribed text  
8. Text is displayed on the screen  

---

### Text-to-Speech Flow

1. User enters text in input field  
2. Text is sent to TTS engine or Web Speech API  
3. Audio is generated from text  
4. Browser plays the audio output  

---

## Uplift AI API Integration

This project uses Uplift AI Speech-to-Text API.

### Workflow

- Audio Blob is converted into FormData  
- FormData is sent to Uplift AI API endpoint using fetch()  
- API processes audio and returns text response  

---

## Note

API key is required to access Uplift AI services.

---

## Example Structure

- Endpoint: Uplift AI Speech-to-Text API  
- Method: POST  
- Data: audio file in FormData  
- Response: transcribed text  

---

## Learning Outcomes

- Working with MediaRecorder API  
- Handling audio blobs in JavaScript  
- API integration (Uplift AI)  
- Understanding speech processing workflow  
- Building real-world frontend projects  

---

## Future Improvements

- Add language support (English / Urdu)  
- Improve UI design  
- Add download audio feature  
- Add real-time speech recognition  
- Secure API key using backend  

---

## Author

Zeenat Fatima
