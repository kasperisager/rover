import React, { FunctionComponent } from "react";

import styles from "./image.module.css";

export const Image: FunctionComponent<Image.Properties> = ({
  children,
  src,
}) => {
  return (
    <div className={styles.image} style={{ backgroundImage: `url(${src})` }}>
      {children ? (
        <div className={styles.caption} tabIndex={0}>
          {children}
        </div>
      ) : null}
    </div>
  );
};

export namespace Image {
  export interface Properties {
    /**
     * The image source.
     */
    src: string;
  }
}
