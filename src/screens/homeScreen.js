import React ,{ Component} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from "react-native";
import filter from "lodash.filter";

const width= Dimensions.get('window').width;
const height= Dimensions.get('window').height;

var random_array_update = [];
var random_array_store = [];

const DATA = [
  {
    id: "1",
    title: "coffee",
  },
  {
    id: "2",
    title: "Tea",
  },
  {
    id: "3",
    title: "Butter",
  },
  {
    id: "4",
    title: "Milk",
  },
  {
    id: "5",
    title: "Bread",
  },
  {
    id: "6",
    title: "Pancakes",
  },
  {
    id: "7",
    title: "Salsa",
  },
  {
    id: "8",
    title: "Tomato",
  },
  {
    id: "9",
    title: "Kiwi",
  },
  {
    id: "10",
    title: "Sauce",
  },
  {
    id: "11",
    title: "Salad",
  },
  {
    id: "12",
    title: "Biscuits",
  },
];

const Item = ({title}) => {
  return(
    <View style={styles.item}>
	  <Text>{title}</Text>
	  </View>
  );
};

const renderItem = ({item}) => <Item title={item.title} />;

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: DATA,
	    data_list:random_array_update,
	    data_random:random_array_store,
	    error: null,
	    searchValue: "",
    };
    this.arrayholder = random_array_store;
  }
  separator = () =>{
    return (
      <View
        style={{
        height: 1,
        width: "100%",
        backgroundColor: "#a9a9a9",
        }}
      />
      );
  };
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {		
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
      });
      this.setState({ data_list: updatedData, searchValue: text });
  };
  randomElement =() => {
    var random_val = this.state.data[Math.floor(Math.random() * this.state.data.length)].title;
    this.state.data_random.push({title:random_val});
	  this.searchFunction("");
  };
  render(){
    return(
      <View style={styles.mainContainer}>
          <View style={styles.containerSearch}>
            <View style={styles.search}>
              <SearchBar
              placeholder="Search Here"
              lightTheme
              round
              value={this.state.searchValue}
              onChangeText={(text) => this.searchFunction(text)}
              autoComplete={false}
              />
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
              style={styles.button}
              onPress={this.randomElement}
              >
              <Icon style={styles.icon} name="plus" size={22} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
          data={this.state.data_list}
          renderItem={renderItem}
          ItemSeparatorComponent={this.separator}
          keyExtractor={(item) => item.id}
          />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    marginTop: 30,
    padding: 2,
    
  },
  item: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  button:{
    height: height * 0.09,
    width:width * 0.18,
    alignItems: "center",
      backgroundColor: "#d3d3d3",
      padding: 10,
  },
  search:{
    alignSelf:'flex-start',
    width:width * 0.82,
  },
  containerButton:{
    flex:1,
    alignItems:'center',
    alignSelf:'flex-end',
    
  },
  containerSearch:{
    flexDirection:'row'
  },
  icon:{
    flex:1,
    padding:12,
  }
});
  
