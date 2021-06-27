import React from "react";
import {
  featureListItem,
  featureListItemIcon,
  featureListItemText,
} from "./featureListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureListItem = ({ children }) => (
  <li className={featureListItem}>
    <span className={featureListItemIcon}>
      <FontAwesomeIcon size="2x" color="#4acaa8" icon={["fab", "github"]} />
    </span>
    {children}
  </li>
);

export default FeatureListItem;
