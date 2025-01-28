function destCity(paths: string[][]): string {
    
    const startCities = new Set<string>();

    // Add all start cities (cityA) to the set
    for (const [cityA, _] of paths) {
        startCities.add(cityA);
    }

    // Find the destination city (cityB that is not in startCities)
    for (const [_, cityB] of paths) {
        if (!startCities.has(cityB)) {
            return cityB;
        }
    }

    return "";

};