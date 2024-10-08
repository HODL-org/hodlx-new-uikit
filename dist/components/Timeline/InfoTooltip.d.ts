import React from "react";
import { BoxProps } from "../Box";
type InfoTooltip = {
    text: string;
    iconColor?: string;
} & BoxProps;
declare const InfoTooltip: React.FC<InfoTooltip>;
export default InfoTooltip;
