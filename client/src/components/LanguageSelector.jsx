// import React, { useState } from 'react';
// import i18next from 'i18next';

// import classes from '../styles/LanguageSelector.module.css';

// const languageMap = {
//   en: { label: 'English', dir: 'ltr', active: true },
//   sv: { label: 'Swedish', dir: 'ltr', active: false },
//   pt: { label: 'Portuguese', dir: 'ltr', active: false }
// };

// const LanguageSelector = ({ accountShow, setAccountShow }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedLang, setSelectedLang] = useState('en');

//   let selectedElement;
//   if (selectedLang === 'en') {
//     selectedElement = <div className={classes.selected_en} />;
//   } else if (selectedLang === 'sv') {
//     selectedElement = <div className={classes.selected_sv} />;
//   } else if (selectedLang === 'pt') {
//     selectedElement = <div className={classes.selected_pt} />;
//   }

//   const handleShowOptions = () => {
//     if (showOptions) {
//       setShowOptions(false);
//       if (accountShow) setAccountShow(false);
//     } else {
//       setShowOptions(true);
//     }
//   };

//   const handleSelection = (language) => {
//     i18next.changeLanguage(language);
//     setSelectedLang(language);
//   };

//   return (
//     <div className={classes.lang_menu} onClick={handleShowOptions}>
//       {selectedElement}
//       {setShowOptions && !accountShow && (
//         <ul className={`${showOptions && classes.show_option}`}>
//           <li>
//             <div className={classes.sv} onClick={() => handleSelection('sv')}>
//               Svenska
//             </div>
//           </li>
//           <li>
//             <div className={classes.en} onClick={() => handleSelection('en')}>
//               English
//             </div>
//           </li>
//           <li>
//             <div className={classes.ml} onClick={() => handleSelection('pt')}>
//               Potuguese
//             </div>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default LanguageSelector;