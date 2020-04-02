const setTheme = (themeName) => {

// Get all 'selected' custom CSS properties from the ':root'.
// These are the variables that are actually used (as oppose to vars to store the alternatives from different themes)
const selectedCssProps = Array.from(document.styleSheets)
  .reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ":root"
                ? [
                    ...def,
                    ...Array.from(rule.style).filter(name =>
                      name.startsWith("--selected")
                    )
                  ]
                : def),
          []
        )
      ]),
    []
  );

// Set the selected values to values of a different theme
selectedCssProps.forEach(prop => {
    // set each selected variable with its analog variable from the new theme
    document.documentElement.style.setProperty(prop, `var(--${themeName}${prop.substring(10)})`);
});

}

export default setTheme;