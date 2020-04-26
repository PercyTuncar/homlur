import React from 'react'
import MainMenu from '../Organisms/ MainMenu'
import '../../styles/styles.css'
import Banner from '../Organisms/Banner'

export default  class Home extends React.Component{
    render(){
        return(
            <>
            <MainMenu/>
            <Banner/>
            </>
        );
    }

}