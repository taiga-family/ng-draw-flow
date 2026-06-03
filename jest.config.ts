const {getJestProjectsAsync} = require('@nx/jest');

export default async (): Promise<{projects: string[]}> => ({
    projects: await getJestProjectsAsync(),
});
