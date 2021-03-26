# Swipe - Ionic Vue POC

## About The Project
Ionic Vue POC for Projecg Swipe
Note: This is just a POC, so there might be some commented codes and it might not be folowing some of the best practices that we follow. but yeah as I said, just a POC :) 

## Features:
**Firebase:** : Please get in touch with me (_Chuck_) if you wanted to test it locally and I'll pass in firebase credentials.
- Signup
    - Email verification
    - Firestore (Save user info in the DB)
- Signin
- Signout
- Password toggle
- Profile
    - Change Avatar using native camera of choose a photo from device (Upload is not integrated yet.)
- Event tracking

**Product:**
- Product list
- Product details
- Product search


### Built With
- `Vue 3`
- `@ionic/vue` version `5.x`
- `vue-router` to manage the routes.
- `vuex` for centralised datastore.
- Firebase for:
  - Authentication
  - Firestore User Data entry
  - Events


## Getting Started

### Installation
Assuming that you already have node and npm installed, If not, you can do so by following the steps in this <a href="https://nodejs.org/en/download/package-manager/" target="_blank">link</a>:

1. Install NPM packages
```
npm install
```

2. Run the local server
```
ionic serve
```

3. Visit <a href="http://localhost:8100/" target="_blank">http://localhost:8100/</a>

4. Running it in emulator, For now, I have added it in ios, we can add android in the future. Asumming that you already have xcode installed:
```
build-ios-emulator
```
This will bundle the app and copy all the assets and open it in xcode automatically. you might need to start the app if needed.
