export const getLanguageList = (data) => {
  const languageSet = new Set();
  data.forEach(({ language }) => {
    if (!languageSet.has(language)) {
      languageSet.add(language);
    }
  });

  return Array.from(languageSet).sort();
};
