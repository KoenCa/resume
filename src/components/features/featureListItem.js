import React from "react";
import {
  featureListItem,
  featureListItemIcon,
} from "./featureListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const FeatureListItem = ({ icon = faCircle, children }) => (
  <li className={featureListItem}>
    <span className={featureListItemIcon}>
      <FontAwesomeIcon color="#4acaa8" icon={icon} />
    </span>
    {children}
  </li>
);

export default FeatureListItem;
