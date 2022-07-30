import { FlatList, View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../Components/Category";


const CategoriesScreen = ({ navigation, route }) => {

    const categoryPessHandler = catId => {
        navigation.navigate("CategoryMealsScreen", {
            categoryId : catId
        });
    };


    return(
        <FlatList 
            data={CATEGORIES}
            renderItem={ itemData => 
                <Category 
                    title={ itemData.item.title } 
                    color={ itemData.item.color } 
                    iconUrl={ itemData.item.iconUrl }
                    onPress={ () => categoryPessHandler(itemData.item.id) } 
                /> 
            }
            keyExtractor={ itemData => itemData.id }
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({

});

export default CategoriesScreen;