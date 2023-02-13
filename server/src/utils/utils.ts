import * as fs from 'fs';

interface Feature {
    name: string,
    status: string;
}

export const readFeatures = (): Feature[] => {
    let features: Feature[] = [];

    fs.readFile(`../assets/features-toggle.json`, 'utf-8', (err, data) => {
        try {
            features = JSON.parse(data);
        } catch (err) {
            throw new Error(err.message)
        }
    });

    return features;
};



