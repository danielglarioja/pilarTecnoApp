import { connect } from 'react-redux';
import { actions } from '../store';
import auth from '@react-native-firebase/auth';

const mapDispatchToProps = dispatch => ({
setUser: (data) =>
dispatch(actions.user.setUser(data)),
})
const mapStateToProps = state => ({
user: state.user.user
})
export default connect(mapStateToProps,mapDispatchToProps)((Login))

onPress={this:onGoogleButtonPress().then(async(data)=>{
console.log('Signed in with Google!')
if(data){
console.log('res login: '+JSON.stringify(data.user))
try {
await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
} catch (e) {
console.log('ubo un error :'+e)
}
this.props.setUser(data.user)
}
})}

onGoogleButtonPress = async () => {
// Get the users ID tokenconst { idToken } = await GoogleSignin.signIn();
// Create a Google credential with the token
const googleCredential = auth.GoogleAuthProvider.credential(idToken);
// Sign-in the user with the credential
return auth().signInWithCredential(googleCredential);
}
