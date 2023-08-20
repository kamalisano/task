import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const TripScreen = () => {
  const [showAddPlaceModal, setShowAddPlaceModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('home'); 
  const [newPlaceName, setNewPlaceName] = useState('');
  const [newPlaceDescription, setNewPlaceDescription] = useState('');
  const [favoritePlaces, setFavoritePlaces] = useState([
  
  ]);

  const handleAddPlace = () => {
    
    const newPlace = {
      id: favoritePlaces.length + 1,
      icon: selectedIcon,
      name: newPlaceName,
      description: newPlaceDescription,
    };
    setFavoritePlaces([...favoritePlaces, newPlace]);
    setShowAddPlaceModal(false);
    setNewPlaceName('');
    setNewPlaceDescription('');
    setSelectedIcon('home'); 




    
  };

  const handleEditPlace = (index, description) => {
    const updatedPlaces = [...favoritePlaces];
    updatedPlaces[index].description = description;
    setFavoritePlaces(updatedPlaces);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Places</Text>
      {favoritePlaces.map((place, index) => (
        <View key={place.id} style={styles.favoritePlaceContainer}>
          <View style={styles.favoritePlace}>
            <AntDesign name={place.icon} size={18} color="orange" />
            <Text style={styles.placeName}>{place.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              const editedDescription = favoritePlaces[index].description;
              setShowAddPlaceModal(true);
              setSelectedIcon(place.icon);
              setNewPlaceName(place.name);
              setNewPlaceDescription(editedDescription);
            }}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={() => setShowAddPlaceModal(true)}>
        <AntDesign name="plus" size={18} color="darkblue"  backgroundColor="white"/>
        <Text style={styles.addButtonText}>Add New Place</Text>
      </TouchableOpacity>

  
      <Modal visible={showAddPlaceModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
        
          <View style={styles.iconList}>
            <TouchableOpacity
              style={selectedIcon === 'home' ? styles.selectedIcon : styles.icon}
              onPress={() => setSelectedIcon('home')}
            >
              <AntDesign name="home" size={24} color="orange" />
              <Text style={styles.icontext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedIcon === 'work' ? styles.selectedIcon : styles.icon}
              onPress={() => setSelectedIcon('work')}
            >
              <AntDesign name="briefcase" size={24} color="orange" />
              <Text style={styles.icontext}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedIcon === 'shop' ? styles.selectedIcon : styles.icon}
              onPress={() => setSelectedIcon('shop')}
            >
              <AntDesign name="shoppingcart" size={24} color="orange" />
              <Text style={styles.icontext}>shop</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedIcon === 'other' ? styles.selectedIcon : styles.icon}
              onPress={() => setSelectedIcon('other')}
            >
              <AntDesign name="other" size={24} color="orange" />
              <Text style={styles.icontext}>other</Text>
            </TouchableOpacity>
            

          
          </View>
          <TextInput
            style={styles.modalInput}
            placeholder="Place Name"
            value={newPlaceName}
            onChangeText={text => setNewPlaceName(text)}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Place Description"
            value={newPlaceDescription}
            onChangeText={text => setNewPlaceDescription(text)}
          />
          <TouchableOpacity style={styles.addPlaceButton} onPress={handleAddPlace}>
            <Text style={styles.addPlaceButtonText}>Save</Text>
          </TouchableOpacity>
          
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoritePlaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  favoritePlace: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeName: {
    marginLeft: 8,
  },
  editButton: {
    borderColor: 'darkblue',
    marginLeft: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    
    
  },
  icontext:{
    color:'darkblue',

  },
  
  editButtonText: {
    color: 'darkblue',
  },
  addButton: {
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
  
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconList: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 8,
  },
  selectedIcon: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    marginHorizontal: 8,
  },
  modalInput: {
    borderWidth: 1,
    backgroundColor:'white',
    borderColor: 'white',
    padding: 8,
    marginBottom: 16,
    width: '80%',
  },
  addPlaceButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addPlaceButtonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default TripScreen;
