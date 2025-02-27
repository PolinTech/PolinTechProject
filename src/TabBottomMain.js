import React,{useEffect} from 'react';
import TabHome from "./TabHome";
import TabNotice from "./TabNotice";
import TabPopular from "./TabPopular";
import TabSearch from "./TabSearch";
import CreateBoard from './CreateBoard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab=createBottomTabNavigator();
//게시판 상세 페이지를 담는 탭 내비게이터 컴포넌트입니다.
//createBottomTabNavigator()를 이용해서 하단에 예쁜 탭 바를 생성할 수 있고
//기본 페이지는 Home으로 설정했습니다.

function TabBottomMain({route}){
    useEffect(()=>{
        const checkCategory=()=>{
            console.log(route.params);
        };
        checkCategory();
    },[]);
    return(
        <Tab.Navigator  >
            <Tab.Screen name="Home" component={TabHome}
                options={{
                    //title:"홈",
                    //tabBarLabel:'홈',
                    //headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
                initialParams={{ category: route.params.category }}
            />
            <Tab.Screen name="Notice" component={TabNotice}
                options={{
                    title:"공지",
                    //tabBarLabel:'공지',
                    //headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon name="announcement" color={color} size={size} />
                    ),
                }}
                initialParams={{ category: route.params.category }}
            />
            <Tab.Screen name="Popular" component={TabPopular}
                options={{
                    title:"인기",
                    //tabBarLabel:()=>null,
                    //headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon name="star" color={color} size={size} />
                    ),
                }}
                initialParams={{ category: route.params.category }}
            />
            
            <Tab.Screen name="Search" component={TabSearch} 
                options={{
                    title:"검색",
                    //tabBarLabel:()=>null,
                    //headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon name="search" color={color} size={size} />
                    ),
                }}
                initialParams={{ category: route.params.category }}
            />
            <Tab.Screen name="Write" component={CreateBoard} 
                options={{
                    title:"게시글 작성",
                    //tabBarLabel:()=>null,
                    //headerShown:false,
                    tabBarIcon:({color,size})=>(
                        <Icon name="edit" color={color} size={size} />
                    ),
                }}
                initialParams={{ category: route.params.category }}
            />
        </Tab.Navigator>
    );
}
export default TabBottomMain;