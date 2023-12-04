import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '200%',
    height: 28,
    backgroundColor: '#007bff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#ffff00',
    marginTop: '500px',
    marginLeft: '110px',
    borderRadius: '5px',
    padding: '10px',
    width: '150px',
    flex: 1 ,
  },
  imagem: {
    width: '333px',
    height: '620px'
  },
  textoBotao: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFD700',
  },
  textoBotaop: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFD700',
    marginBottom: '10px',
  },
  btnres: {
    backgroundColor: 'red',
    borderRadius: '50px',
    height: '20px',
    width: '90px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },
  imagem1: {
    width: '400px',
    height: '620px',
  }
});

export default styles;

