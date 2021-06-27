import React from "react";
import { featureList } from "./featureList.module.scss";

const FeatureList = ({ children }) => <ul className={featureList}>{children}</ul>;

export default FeatureList;
