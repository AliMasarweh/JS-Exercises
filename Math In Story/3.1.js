function nb_year(startingPopulation, percent, aug, targetPopulation) {
    let ans = 0;
    percent /= 100;
    while(startingPopulation < targetPopulation) {
        startingPopulation = Math.floor(startingPopulation * (1 + percent));
        startingPopulation += aug;
        ++ans;
    }

    return ans;
}