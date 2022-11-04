import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links: React.FC = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Dashboard Embedding
            </NavLink>
            <NavLink to={"/custom_execution"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Custom Execution
            </NavLink>
            <NavLink to={"/chart3d_v1"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                3D chart v1
            </NavLink>
            <NavLink to={"/chart3d_v2"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                3D chart v2
            </NavLink>
            <NavLink to={"/vr_demo"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                VR Demo
            </NavLink>
        </>
    );
};

export default Links;
