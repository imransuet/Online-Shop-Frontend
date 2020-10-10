import React, { Component } from "react";
import a from "../images/shop.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';



class HeaderCustomer extends Component
{

    render( )
    {
        return(

           
            <div>
            
            
            <div className="container"><img src={a}  alt=" " height={300} width={600}/></div>
            

            </div>

        );
       
    }

}


export default HeaderCustomer;