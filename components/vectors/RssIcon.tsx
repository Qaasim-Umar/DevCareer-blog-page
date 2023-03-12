import * as React from "react";
import { SVGProps } from "react";
import clsx from "clsx";

const RssIcon = (
  props: SVGProps<SVGSVGElement> & {
    isclass?: string;
  }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    className={clsx(props.isclass ? props.isclass : "")}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"
      fill="rgba(139,139,139,1)"
    />
  </svg>
);

export default RssIcon;
