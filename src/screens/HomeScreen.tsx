import Constants from 'expo-constants'
import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,StatusBar,ScrollView, Touchable, FlatList} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import {dummyData} from '../constants'
import {LinearGradient} from 'expo-linear-gradient';
import { ProfitIndicator,ActionCenter } from './components/homeComponents'






export const HomeScreen = () => {     //{navigation}: any and onPress{()=>navigation.navigate(Home)}

  
  return (
    <View style={{flex:1}} >
            
    {/* Statusbar */}
    <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
    {/* Header section */}
    <LinearGradient start={{x:0.0,y:0.4}} end={{x:0.5,y:1.0}} location={[0,1]} colors={['#2c3e50','#000000']} style={{flex:1.2,flexDirection:'column'}} >
        <View style={{flexDirection:'column',marginTop:hp('10%'),paddingHorizontal:'5%'}} >
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
            {/* Welcome message and name */}
            <View style={{flexDirection:'column'}} >
                <Text style={{fontSize:16,color:'#fff'}} >Welcome Back</Text>
                <Text style={{color:'#fff',fontSize:22}} >User!</Text>
            </View>

            {/* Bell icon and profile pic */}
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <Icon name='bell' size={30} color="#fff" />
                <Image source={require('../../assets/favicon.png')} resizeMode='cover' style={{width:40,height:40,borderRadius:20,marginLeft:15}} />
            </View>
        </View>

        
        {/* amount  */}
        <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}} >
                {/* Amount */}
                <View style={{flexDirection:'column'}} >
                    <Text style={{color:'#fff',fontSize:28,}} >₹32,7456.68</Text>
                    <Text style={{color:'rgba(255,255,255,0.3)',fontSize:14}} >Updated 2 mins ago</Text>
                </View>
                
                {/* profit loss indicator */}
                {/* <ProfitIndicator type="I" percentage_change={dummyData.portfolio.changes} />             */}
                
        </View>
    </View>

    </LinearGradient> 
    
    {/* Body section */}
    <View style={{flex:2.5,backgroundColor:'#fff',paddingHorizontal:wp('5%')}} >
        {/* Action Center */}
        <View style={{flexDirection:'row',backgroundColor:'#fff',height:hp('13%'),width:'100%',alignItems:'center',justifyContent:'space-around',borderRadius:10,borderWidth:1,borderColor:'rgba(255,255,255,0.1)',elevation:10,shadowColor:'#000',shadowRadius:10,marginTop:-25}} >

            <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                <Image style={{height:40,width:40}} source={require('../images/topup.png')} />
                <Text style={{fontSize:15,color:'#333'}} >Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                <Image style={{height:40,width:40}} source={require('../images/buy.png')} />
                <Text style={{fontSize:15,color:'#333'}} >Refer and Earn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                <Image style={{height:40,width:40}} source={require('../images/withdraw.png')} />
                <Text style={{fontSize:15,color:'#333'}} >P2P</Text>
            </TouchableOpacity>
         
            {/* <ActionCenter img_src={require('../../assets/favicon.png')} img_text="Top-Up" /> */}

            {/* <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
            <Image style={{height:60,width:60}} source={'../../assets/favicon.png'} />
            <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >{"img_text"}</Text>
            </TouchableOpacity>  */}
              
            {/* <ActionCenter img_src={require('../../assets/favicon.png')} img_text="Buy" /> */}

            {/* <ActionCenter img_src={require('../../assets/favicon.png')} img_text="WithDraw" /> */}
              
        </View>


        {/* My Assets */}
        <View style={{flexDirection:'column'}} >
            {/* Text and button */}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}} >
                <Text style={{color:'#333',fontSize:22}} >My Assets</Text>
                <TouchableOpacity onPress={()=>console.log('see all')} >
                    <Text style={{color:'#2249DA',fontSize:20}} >See All</Text>
                </TouchableOpacity>
            </View>


            {/* Horizontal asset slider */} 
             <FlatList
                keyExtractor={(item)=>item.id}
                data={dummyData.coins}
                renderItem={({item})=>(
                    <View style={{position:'relative',flexDirection:'column',height:hp('20%'),width:wp('65%'),borderWidth:1,borderColor:'#ddd',backgroundColor:'#fff',borderRadius:15,marginRight:10,marginTop:10}}  >
                        {/* Coin and symbol */}
                        <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingTop:20}} >
                            <Image style={{height:25,width:25}} source={item.image} />
                            <Text style={{color:'#333',fontSize:18}} > {item.currency}/USDT</Text>
                        </View>


                        {/* coin and price indicator */}
                        <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around',alignItems:'center'}} >
                            {/* Coin Price */}

                            <View style={{flexDirection:'column'}} >
                                <Text style={{color:'#333',fontSize:20}} > ${item.amount}</Text>
                                <Text>0.0256 BNB</Text>
                            </View>

                            {/* indicator */}
                            {/* <ProfitIndicator type={item.type} percentage_change={item.changes} /> */}

                        </View>

                    </View>
                )}
                horizontal={true}
             />
        
        </View>

        {/* Market */}
        <View style={{flex:1,flexDirection:'column'}} >
            {/* market text */}
            <Text style={{fontSize:22,color:'#333'}} >Market</Text>

            {/* coin list */}
            <FlatList
                keyExtractor={(item)=>item.id}
                data={dummyData.coins}
                renderItem={({item})=>(
                    <View style={{flexDirection:'row',height:hp('10%'),width:'100%',borderWidth:1,borderColor:'#ddd',borderRadius:15,justifyContent:'space-between',paddingRight:10,marginBottom:10}} >
                        {/* Coin image ,coin name and symbol */}
                        <View style={{flexDirection:'row',alignItems:'center'}} >
                            {/* Coin image */}
                            <Image style={{height:'65%'}} resizeMode="contain" source={item.image} />

                            {/* Coin symbol */}
                            <View style={{flexDirection:'column',justifyContent:'flex-start'}} >
                                <Text style={{color:'#333',fontSize:20}} >{item.currency}</Text>
                                <Text>BNB/USDT</Text>
                            </View>
                        </View>


                        {/* Coin price and indicator */}
                        <View style={{flexDirection:'column',backgroundColor:'#fff',alignContent:'center',justifyContent:'center'}} >
                            {/* price */}
                            <Text style={{fontSize:14,color:'#333'}} >${item.amount}</Text>

                            {/* indicator */}
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                                <Text style={{color: item.type =="I" ? 'green':'red',fontSize:12}} >{item.changes}</Text>
                                
                                <Icon name={item.type == "I" ? 'chevron-circle-up':'chevron-circle-down'} color={item.type == "I" ? 'green':'red'} />

                            </View>
                        </View>

                    </View>
                )}
            />

        </View>
        


    </View>
    
</View>
  );
};





const styles = StyleSheet.create({

  container:
   { 
     backgroundColor: '#000000',
     flex:1,
     paddingTop: Constants.statusBarHeight,
    },
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 10, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 1, backgroundColor: 'cyan' },
  root: {
    padding: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '40%',
    aspectRatio: 1,
    alignItems: 'center',
  },
  header1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -100,
    marginBottom: 15,
    alignItems:'center',
    justifyContent:'center',
    textAlign: 'center',
    color:'white'
  },
  header2: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707070',
  },
  root2: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '50%',
  },
  // balanceContainer: {
  //   marginVertical: 20,
  //   width: '50%',
  //   alignItems: 'center'
    
  // },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777777'
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'white'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  ticker: {
    color: 'grey',
    fontWeight: '700' 
  },
  coinContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: "#121212"
  },
  quantityContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end'
  },
  currentBalance: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  currentBalanceValue: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: 1
  },
  valueChange: {
    fontWeight: '700',
    fontSize: 16,
  },
  percentageChange: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  priceChangePercentageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingVertical: 8,
    borderRadius: 5,
  },
  assetsLabel: {
    color: 'white',
    fontSize: 23,
    fontWeight: '700',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 10,
    borderRadius: 5 
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  }
});

