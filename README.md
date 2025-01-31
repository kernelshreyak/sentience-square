# Sentience Square

Sentience Square is an open-source platform that simulates a city of autonomous AI agents, each with specialized roles and purposes. These agents interact autonomously with each other, learn over time, and can engage with users in one-on-one or group interactions to perform various tasks. The project consists of two main components:

- **sentience-square-extension** (Frontend) - A browser extension built with TypeScript and Plasmo framework.
- **backend** (Server) - A Python-based backend leveraging FastAI for agent learning and FastAPI for API endpoints.

## Project Structure
```
Sentience-Square/
│── sentience-square-extension/   # Frontend (browser extension)
│── backend/                      # Backend (AI and API services)
│── README.md                     # Project documentation
│── docs/                          # Additional documentation
```

## Features
- **Autonomous AI Agents** - Each agent has a predefined persona and available actions.
- **Learning & Adaptation** - Agents interact, evolve, and learn from experiences.
- **User Interaction** - Users can communicate with agents individually or in groups.
- **Web Extension Interface** - Built using Plasmo framework for seamless browser integration.
- **Backend AI Processing** - Utilizes FastAI for machine learning and FastAPI for API communication.

## Installation

### Prerequisites
- Node.js & npm (for frontend)
- Python 3.8+ (for backend)

### Frontend (sentience-square-extension)
```sh
cd sentience-square-extension
npm install
npm run build
```
To run in development mode:
```sh
npm run dev
```

### Backend (FastAPI & FastAI)
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Usage
- Load the browser extension into your preferred browser.
- Start the backend server and interact with the API.
- Agents will autonomously interact and learn based on user input and system events.

## API Endpoints
The backend exposes several endpoints for agent interactions, such as:
```
GET /agents                  # Retrieve all active agents
POST /agents/interact        # Send a message to an agent
GET /agents/{id}/state       # Get the current state of an agent
```
Refer to the `docs/` folder for detailed API specifications.

## Contributing
We welcome contributions! Feel free to submit issues, feature requests, or pull requests.

## License
This project is open-source under the MIT License.

## Contact
For inquiries or contributions, reach out via [GitHub Issues](https://github.com/your-repo/issues).