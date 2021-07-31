import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_English from "./translation/English/common.json"
import common_Hindi from "./translation/Hindi/common.json";
import common_Marathi from "./translation/Marathi/common.json";


i18next.init({
    whitelist:['English','Hindi','Marathi'],
    interpolation: { escapeValue: false },  // React already does escaping

    lng: 'English',                              // language to use
    resources: {
        English: {
            common: common_English             // 'common' is our custom namespace
        },
        Hindi: {
            common: common_Hindi
        },
        Marathi: {
            common: common_Marathi
        },
    },
});

reactDom.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root')
);