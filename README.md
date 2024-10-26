# AI T-Shirt Designer

Welcome to the **AI T-Shirt Designer**! This application allows users to design custom t-shirts by choosing colors, uploading images, and even generating unique designs using AI. Perfect for anyone looking to create personalized apparel easily.

## Features

- **Color Selection**: Choose from a variety of colors for your t-shirt.
- **Image Upload**: Upload custom images to add to your design.
- **AI-Generated Designs**: Leverage AI to create one-of-a-kind graphics for your t-shirt.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- An OpenAI API key to enable AI-powered design features.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/ai-tshirt-designer.git
   cd ai-tshirt-designer
   ```

2. **Set Up Environment Variables**:

   - In the root directory, create an `.env` file.
   - Add your OpenAI API key in the `.env` file as follows:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     ```

3. **Install Dependencies**:
   - Navigate to both the server and client folders, and run:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the Server**:

   - In the `server` folder, start the backend server by running:
     ```bash
     npm start
     ```

2. **Run the Client**:

   - In the `client` folder, start the frontend development server by running:
     ```bash
     npm run dev
     ```

3. Open your browser and navigate to `http://localhost:5173` to start designing your custom t-shirt!

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the project.
