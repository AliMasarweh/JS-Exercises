function numOfPeopleAtLastStop(peopleInAndOut) {
    let ans = 0;
    for (const stopInAndOut of peopleInAndOut) {
        ans += stopInAndOut[0] - stopInAndOut[1];
    }

    return ans;
}