import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Switch, Route, Redirect } from "react-router-dom";

import { useLocation } from "react-router";

import routes from "../routers/routes";

const useStyles = makeStyles((theme) => ({

  main:{
    margin: "0px 0px 0px 70px",

    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },

    "& .language":{
      position:"absolute",
      top:"20px",
      right:"20px",

      backgroundColor:theme.palette.primary.main,
      color:"white",
      padding:"5px 20px",
      borderRadius:"20px",

      "& span":{
        fontWeight:"500",
        "&:hover":{
          cursor:"pointer",
        }
      }
    }
  }

}))

function AllPages() {
  const location = useLocation();
  const cs = useStyles();
  //const { t, i18n } = useTranslation();


  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location]);

  return (
    <div className={cs.main} >
      {/*<div className="language" >
        <span >  EN </span> - <span onClick={()=>{i18n.changeLanguage('ko')}} > FR </span> - <span> AR </span>
        <Trans>hello , how are you ?</Trans>
      
  </div>*/}

    <Switch>
      {routes.map((route, key) => {
        return (
          <Route key={key} path={route.path}>
            {route.component}
          </Route>
        );
      })}
      <Redirect from="/" to="/home" />
    </Switch>
    </div>
  );
}

export default AllPages;