import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const ProfileScreen = () => {
  const handleBack = () => {
  
  };

  const [favoritePlaces, setFavoritePlaces] = useState([

  ]);

  return (
    <View style={styles.container}>
      <View style={styles.overall}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleBack}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile Settings</Text>
        <View style={styles.iconContainer}>
          <AntDesign name="edit" size={24} color="white" />
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.avatarContainer}>
        
        <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.Q_vZZcSYOaPMcxnXMQQ99QHaE8&pid=Api&P=0&h=180' }} style={styles.avatar} />
        </View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.contact}>123-456-7890</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      </View>
      </View>
      
      
      <Text style={styles.favoritePlacesTitle}>Favourite Places</Text>
      <View style={styles.favoritePlacesContainer}>
        {favoritePlaces.map(place => (
          <TouchableOpacity key={place.id} style={styles.favoritePlaceItem}>
            <View style={styles.placeIcon}>
              <AntDesign name={place.icon} size={24} color="black" />
            </View>
            <Text style={styles.placeName}>{place.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => setShowAddPlaceModal(true)}>
        <AntDesign name="plus" size={18} color="darkblue"  backgroundColor="white"/>
        <Text style={styles.addButtonText}>Add New Place</Text>
      </TouchableOpacity>

        <br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



        <TouchableOpacity style={styles.addButton} onPress={() => setShowAddPlaceModal(true)}>
        <AntDesign name="rightsquare" size={18} color="orange"  backgroundColor="white"/>
        <Text style={styles.addButtonText}>Logout</Text>
      </TouchableOpacity>

        
      </View>
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconContainer: {
    padding: 8,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    backgroundColor: '#FFA500', 
    borderRadius: 56, 
    padding: 4, 
  },
  avatar: {
    width: 112, 
    height: 112,
    borderRadius: 56, 
  },
  userInfoWrapper: {
    backgroundColor: '#FFA500',
    marginLeft: 16,
  },
  name: {
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contact: {
    color:'white',
    fontSize: 18,
  },
  email: {
    color:'white',
    fontSize: 18,
  },
  favoritePlacesTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  favoritePlacesContainer: {
    flexDirection: 'column',
  },
  favoritePlaceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  placeIcon: {
    marginRight: 8,
  },
  placeName: {
    fontSize: 16,
  },
  addPlaceButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  addPlaceButtonText: {
    fontSize: 16,
    color:'darkblue'
  },
  overall:{
    backgroundColor: '#FFA500',

  },
  save:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
    alignItems:'left',
    borderRadius:'25',

  },
  addButton:
  {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  addButtonText: {
    color: 'darkblue',
    marginLeft: 8,
    padding: 8,
  },
  addButtonTextlog:{
    color:'black',
  }
  
});

export default ProfileScreen;





