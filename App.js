import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesome6} from "expo@/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Movie = ({title, year, icon_name, icon_color}) => {
    return (
        <View>
            <Text></Text>
            <Text>
                Movie:
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />
                 {title} {year}
            </Text>
        </View>
    );
};

// export default Movie;
 class AllMovies extends React.Component {
     render() {
         return(
             <View>
                 <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"} />
             </View>
         );
     };
 };
