import React from 'react';
import {Footer} from "antd/es/layout/layout";

const FooterBlock = () => {
    return (
        <Footer style={{textAlign: "center"}}>Trying ant design ©{new Date().getFullYear()}</Footer>
    );
};

export default FooterBlock;
