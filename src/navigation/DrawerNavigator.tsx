//ferramentas 
//chamando o pedreiro que vai construir os components do castelo
import React from 'react';

//planta do mapa CreateDrawerNavigator , que vai gerar o menu alteral do castelo 
import { createDrawerNavigator } from '@react-navigation/drawer';

//chama a sala Dashboard para colocar no mapa
import DashboardScreen from '../screens/Dashboard/Home';

//chama a Sala de Irrigação para colocar no mapa
import IrrigationScreen from '../screens/Irrigation/Control/index';

//Chama a sala de Relatorios para colcoar no mapa
import ReportsScreen from '../screens/Reports/ReportsScreen';


//desenhando o mapa drawer(menu lateral)
const Drawer = createDrawerNavigator()

//cria a função DrawerNavigator, que sera chamada quando o visitante ja estiver logado (com crachá), para mostrar o mapa
export default function DrawerNavigator() {

    //devolve o mapa (as salas) o mapa começa com a 'primeira sala ' dashboard Drawer.Navigator initialRouteName="Dashboard">

    //depois adiciona os mapas  <Drawer.Screen name="Irrigação", sala de relatorios  component={IrrigationControlScreen} />
    return(
        <Drawer.Navigator initialRouteName="Dashboard">

            <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            <Drawer.Screen name="Irrigation" component={IrrigationScreen} />
            <Drawer.Screen name="Relatorios" component={ReportsScreen} />


            
        </Drawer.Navigator>//mapa (menu lateral) foi desenhado com 3 salas
    );
}