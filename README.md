# Ping-ChatApp - Real-Time Chat Application

**Ping-ChatApp** is a real-time chat application built using **React** and **Firebase**. It allows users to sign up, log in, and chat with other users in real-time. The app offers a clean and simple interface, making communication fast and easy.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely using Firebase Authentication.
- **Real-Time Messaging**: Send and receive messages in real time with Firebase Firestore.
- **Responsive UI**: The app is fully responsive and works seamlessly across different devices.
- **Message Timestamps**: View messages with accurate timestamps to keep track of conversations.
- **User Presence Detection**: Detect when users are online or offline.

## Technologies Used

- **Frontend**:
  - React (Hooks, Context API)
  - HTML5
  - CSS3
- **Backend**:
  - Firebase Authentication (for user management)
  - Firebase Firestore (for real-time database)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/vedant-codes/Ping-ChapApp.git
   cd Ping-ChapApp
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up Firebase:

   - Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and set up **Firebase Authentication** and **Firestore**.
   - Get your Firebase project credentials and paste them into the `firebase-config.js` file.

4. Run the project:

   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

## Firebase Configuration

Make sure to add your Firebase credentials in the `firebase-config.js` file:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Usage

1. **Sign Up/Login**: Users need to create an account or log in to start chatting.
2. **Chat in Real-Time**: Send and receive messages instantly. The chat updates in real-time without needing to refresh the page.
3. **User Presence**: See who's online and ready to chat.

## Contributing

Contributions are welcome! If you would like to contribute to the project, feel free to create a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [React](https://reactjs.org/) for providing a great framework for building dynamic UIs.
- [Firebase](https://firebase.google.com/) for offering easy-to-use authentication and database services.
- Open-source libraries and tutorials that inspired the project.

---
