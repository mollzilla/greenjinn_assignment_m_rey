WELCOME TO MY GREENJINN ASSIGNMENT

1. Decided App and components layout on pen and paper.
2. Created react app, Github repo and pushed new project.
3. Decided on Material UI for interface and installed package
4. Created a basic layout for the app and a fake array to mimic the amount of buttons
5. Fetched pairs data to display actual value of the buttons
6. First approach to logic of pair choosing with pseudocode. Decided on keeping one state just to ensure the order was odd and even. This might need a later approach on how to avoid choosing the same option twice.
7. Once the object with the trading pair was correctly created, it can be passed via props to the component that shall show the data. It has its own async function to fetch the data according to the chosen pair.
8. Some styling was needed on the buttons, used display:grid to uniform the layout and tried to keep the buttons section as small as possible to have future room for the display of the values.
9. useEffect() is used in the SelectedPairValues component to display updated data.
10. SelectedPairValues was renamed GJNumbersView
11. Modified the object on TradingPairsContainer to be passed as props to GJNumbersView to include the pair description.
12. after attempting several material UI elements for GJNumberLabel, created my own card
13. Formatted dates. At this point I noticed the app was malfunctioning and bringing the correct data only one out of 2 times. This had to do with the state which decides the order of the pair. Started debugging.
14. At this point I realized I had made a mistake comprehending the assignment and each "pair" was just ONE ticker. So my logic had been far more intrincate and complicated than needed. Started backpedalling. No frustration, just code.
15. Changed all variable names to get familiar with the idea that I am dealing with just one pair, not a comparison of two pairs.
16. Code refactored. Much simpler than originally thought.
17. Finishing touches to refactoring: clearing selection and voiding GJNumbersView in case of user clearing selection.

18. Time to tacke "Average Ticker Values". As always, will commence with a basic layout which then will be refined according to the nature of the data to be displayed.
19. Fetched data and decided to reuse components GJNumbersView and GJNumberLabel  to display data.
20. Still not knowing which data to average, choose a value to test the functionality.
21. Added responsivenes to average container via flexbox.

22. Luckily the variable to use to get AVG was bid, which was the one that was already been used.
23. At deployment, ran into an array of mistakes that could have been easily avoided  with more attention to detail: the homepage was added at the wrong place in package.json, causing it to deploy incorrectly. Luckily the mistake was fixed.

