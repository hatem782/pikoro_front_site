import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact_item: {
    height: "100%",

    "& h4": {
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "21px",

      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      lineHeight: "16px",
      },
    },

    "& p": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "18px",

      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      lineHeight: "16px",
      },
    },

    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
}));

function ContactItem(props) {
  const { title, items, isLink = false, same = false } = props.contact;
  const cs = useStyles();

  return (
    <div className={cs.contact_item}>
      <h4>{title}</h4>
      <div className="content">
        {items.map((item, key) => {
          if (isLink) {
            return (
              <p key={key}>
                <a href={item.link} target={same ? "" : "_blank"}>
                  {item.text}
                </a>
              </p>
            );
          } else {
            return <p key={key}>{item.text}</p>;
          }
        })}
      </div>
    </div>
  );
}

export default ContactItem;
