# Imagetext

Imagetext is a web application built using Vite-React that allows users to extract text from images using Tesseract.js, a powerful OCR (Optical Character Recognition) library. This app provides a simple interface to upload images and extract text in real-time.

## Features
- Upload images to extract text.
- Real-time OCR text extraction with Tesseract.js.
- Built with React for the frontend and Vite for fast development and bundling.

## Tech Stack
- **Frontend**: React
- **Build Tool**: Vite
- **OCR**: Tesseract.js
- **Styling**: CSS (or you can use any styling approach like SASS, Tailwind CSS, etc.)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Development](#development)

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository
```bash
  git clone "https://github.com/nithinsr04/ImageText"
  cd Imagetext
```

2. Install dependencies
Ensure you have Node.js and npm installed on your system. Then, run the following command to install the required dependencies:
```bash
  npm install
```

3. Run the development server
Start the development server with:
```bash
  npm run server
```
This will open the app in your default browser at ```http://localhost:5173```.

##Usage
Open the app in your browser.
Upload an image by clicking the "Upload Image" button or drag-and-drop an image file.
Wait for Tesseract.js to process the image and extract the text.
The extracted text will appear below the image.
###How It Works
Tesseract.js is used to perform Optical Character Recognition on the uploaded image. Once the image is uploaded, Tesseract.js analyzes the image, extracts the text, and returns the recognized text.

The image is processed in the frontend React app, and once the text is extracted, it's displayed to the user in real-time.


##Development
If you wish to contribute or develop further features, here are some useful commands:

Start the development server
```bash
  npm run dev
```
-This starts a local server for development and hot reloading.

Build the project for production
```bash
  npm run build
```
-This will create an optimized production build of your app in the dist folder.

---
## Contact
- For questions or support, please contact:
- Nithin S R
- Email: nithinsrhlk@gmail.com

---
