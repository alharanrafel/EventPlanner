
import React from 'react'
import { matchRoutes } from 'react-router-dom';


const InitialLogo =(userObj)=>{
    console.log('userObj',userObj);

return(
  <div>
    {userObj.userObj.map((userData,index)=>{
        return(
            <div key={index}>
                style={{
                    width:'2000',
                    height: '549',
                    margin : 'auto',
                    display : 'flex',
                    marginTop :'50px',
                    marginBottom : '50px',
                    borderRadius : 'yellow',
                }}

                <p style= {{
                    margin : 'auto',
                    forntSize : '48px',
                    color : 'white',
                    height : '93px',
                    width:'93px',
                    backgroundColor : userData.color,
                    borderRadius :'100px',
                    alignS : 'left',
                    justifyItems: 'left',
                    display: 'flex',

                }}
                >{userData.name.charAt(0)}</p>
            </div>

        )
    })}
     </div>
);
}
export default InitialLogo;
