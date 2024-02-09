import { StyleSheet } from 'react-native';

export const RuleStyles = StyleSheet.create({
    Layout: {
     // flex: 1,
      alignItems: 'left',
     // padding: 10,
      paddingTop:100
    },
    MainHeading: {
      // fontFamily: 'sans-serif',
      color: '#00004D',
      fontSize: 25,
      fontWeight: 'bold',
      padding:5
    },
    ImageStyle: {
      width: '100%',
      height: 150,
      resizeMode: 'stretch',

    },
    VerticalImageStyle: {
      width: '100%',
      height: 500,
      resizeMode: 'stretch',
      padding:10
    },
    ScrollViewStyle:{
    //padding:5,
    height:'95%',
    //marginBottom:50
    },
    SubHeading1: {
      // fontFamily: 'sans-serif',
      color: '#00004D',
      fontSize: 26,
      padding: 20,
      fontWeight: 'bold',
    },
    SubHeading2: {
      // fontFamily: 'sans-serif',
      color: '#00004D',
      fontSize: 24,
      fontWeight: 'bold',
    },
    SubHeading3: {
      // fontFamily: 'sans-serif',
      color: '#00004D',
      fontSize: 20,
      fontWeight: 'bold',
    },
    SubHeading3Red: {
      // fontFamily: 'sans-serif',
      color: '#FF0000',
      fontSize: 20,
      fontWeight: 'bold',
    },
    SubHeading3Green: {
      // fontFamily: 'sans-serif',
      color: '#008000',
      fontSize: 20,
      fontWeight: 'bold',
    },

    Description: {
      // fontFamily: 'sans-serif',
      color: '#000',
      padding:10,
      fontSize: 15,
    },
    DescriptionSize10: {
      // fontFamily: 'sans-serif',
      color: '#000',
      padding:10,
      fontSize: 13,
    },
   /* DescriptionPaddingLeft20: { //should be used inside above description
      fontFamily: 'sans-serif',
      color: '#000',
      paddingLeft:20,
      fontSize: 20,
    },*/
  
    ButtonContainer: {
     flexDirection: 'row',
     width: '100%',
     height: 50,
     backgroundColor: '#00004D', //blue 
     justifyContent: 'center',
     alignItems: 'center',
     position: 'absolute', //Here is the trick
     bottom: 0, //Here is the trick

    },
    ButtonViewStyle: {
     flex: 1,
    },
    ButtonStyle:{
      color:'#00004D',
    },
    ButtonIconStyle: {
      color:"white",
      fontSize:25,
    },
    hyperlinkStyle: {
      color: '#00004D',
      fontWeight: 'bold',
    },
    TextInputStyle:{
      borderColor: '#000',
        borderWidth: 1,
   
    },
  });


  
export const NavigationStyles = StyleSheet.create({
  container: {
     padding: 5,
     margin: 5,
     alignItems: 'left',
     backgroundColor: '#e8e8e8',
     flexDirection:'row',
     width: '98%'
  },
  IconStyle:{
       fontSize:25,
       marginLeft: 'auto',
marginRight: 0
      //  color:'#ff0000', //'#e91e63', // PINK
  },
  number: {
    //  fontFamily: 'sans-serif',
     color:'#00004D',
     fontSize: 25,
     fontWeight: 'normal',
  },
  text: {
    //  fontFamily: 'sans-serif',
     color: '#000',
     fontSize: 20,
     fontWeight: 'normal',
     width:'95%',
     margin:5
  },
  lineStyle: {
     //  borderWidth: 0.1,
     //  borderColor: '#000',
     margin: 1,
     flex:1
  },

});


