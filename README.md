# Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
- A Cloudinary account (you can sign up [here](#https://cloudinary.com/))

# Setup

## 1. Clone the Repository
    ```
    git clone https://github.com/arvind5588/cloudinary-image-upload
    cd cloudinary-image-upload
    ```
    
## 2. Install Dependencies
    ```
    npm install
    ```
    
## 3. Configure Environment Variables
Create a .env file in the root of the project and add your Cloudinary credentials:
    ```
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    PORT=3000
    ```
    
   ### - Replace your_cloud_name, your_api_key, and your_api_secret with your actual Cloudinary credentials.

## 4. Start the Server
     ```
     npm start
     ```
     
    - The server will start on the port specified in your .env file (default is 3000)

# API Endpoints

    ## Upload an Image
    
    ## URL
     ```
     POST /upload
     ```
    
    ## Description
    Uploads an image to Cloudinary and returns the URL of the uploaded image.
    
    ## Request
    Content-Type: multipart/form-data
    
    ## Body:
    
    file: The image file to upload.
    product_id: The ID of the product the image is associated with.
    
    ## Response
    200 OK: Returns the URL of the uploaded image.
    400 Bad Request: Returns an error if the upload fails.
    
    ## Example using Postman
    
    ## Open Postman.
    - Create a new POST request to http://localhost:3000/upload.
    - In the Body tab, select form-data.
    - Add a new key file, change the type to File, and select an image file.
    - Add another key product_id and set its value.
    - Send the request.
    
    ## Example Response
     ```
    {
      "message": "Image uploaded successfully",
      "url": "https://res.cloudinary.com/your_cloud_name/image/upload/v1623937832/sample.jpg"
    }
     ```
     
# Project Structure

```

cloudinary-image-upload/
├── node_modules/
├── src/
│   ├── config/
│   │   └── cloudinaryConfig.js
│   ├── controllers/
│   │   └── uploadController.js
│   ├── routes/
│   │   └── uploadRoutes.js
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
