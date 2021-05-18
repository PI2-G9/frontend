const Style = {
  container: {
    display: 'flex',
    flex: 1,
    borderRadius: '10px 0px 0px 10px',
    background: `linear-gradient(120deg, #276678, #1687A7)`,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryButton: {
    backgroundImage: 'linear-gradient(120deg, #276678, #1687A7)',
    color: 'white',
    width: '11vw',
    height: 40,
    borderRadius: 10,
    fontSize: 25,
    margin: 10, 
    marginRight: 15,
    border: 'none',
  },
  secondaryButton: {
    backgroundImage: 'linear-gradient(120deg, #F6F5F5, #D3E0EA)',
    color: '#515151',
    width: '15vw',
    height: 40,
    borderRadius: 10,
    fontSize: 25,
    margin: 10,
    border: 'none',
  },
  input: {
    width: '90%',
    height: '50%',
    margin: 10,
    borderRadius: 10,
    fontSize: 18,
    textIndent: 10,
    outline: 'none',
    backgroundColor: '#F9F9F9',
    borderColor: '#515151'
  },
  card:{
    display: 'flex', 
    width: '90%', 
    height: '90%', 
    backgroundColor: 'white', 
    flexDirection: 'column', 
    borderRadius: 15
  },
  text:{
    fontSize: 24,
    color: '#515151',
    fontWeight:'normal',
    margin: 5,
  },
  textContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  historyHeader:{
    display: 'flex',
    width:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  textHeader:{
    textAlign:'center',
    margin: 5,
    color: "#276678",
    fontSize:22,
  },
  icon:{
    textAlign:'center',
    margin: 5,
    color: "#276678",
    fontSize:28,
  }, 
  status:{
    textAlign:'center',
    margin: 5,
    fontSize:22,
    backgroundColor: '#DBFFCA',
    borderRadius: 30,
    color: '#4F8D00',
    padding: 10,
  },
}

export default Style;