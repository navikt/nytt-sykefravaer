import React from 'react';

import './Header.less';
import { Systemtittel } from 'nav-frontend-typografi';

const Header = ({ location }: { location: string }) => {
    return (
        <div className="location-header">
            <Systemtittel>{location}</Systemtittel>
        </div>
    );
};

export default Header;
