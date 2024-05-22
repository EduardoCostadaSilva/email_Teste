import { Image, StyleSheet, Platform, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  const nodemailer = require('nodemailer') ;

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "39b26a912c4c28",
      pass: "5ef038ccc5cfb4"
    }
  });

  const message = {
    from: 'remetente@asdrubal.corp',
    to: 'eduardocosta5556@gmail.com',
    subject: 'Dale NodeMailer',
    text: 'Email teste do Nodemailer com mailtrap. Parece deveras bom.😎',
    html: '<p>Email teste do Nodemailer com mailtrap.  Parece <b>deveras</b> bom. 😎</p>'
  }

  const sendEmailtest = async () => {
    const info = await transport.sendMail(message)
    alert(`Email sent: ${info.response}`) 
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Enviar um email!</ThemedText>
        <HelloWave />
      </ThemedView>
      <Button title="Enviar Email" onPress={sendEmailtest}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
