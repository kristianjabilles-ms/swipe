import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default {
  authentication: firebase.auth(),
  database: firebase.firestore()
}
