/* global danger, fail, message */

const bodyAndTitle = (danger.github.pr.body + danger.github.pr.title).toLowerCase();
const isTrivial = bodyAndTitle.includes('#trivial');

if (!isTrivial) {
    // Fail if there isn’t a CHANGELOG entry – should update for every PR
    if (!danger.git.modified_files.includes('CHANGELOG.md')) {
        const changelogLink = 'https://github.com/justeat/fozzie/blob/master/CHANGELOG.md';
        fail(`:memo: Please include a CHANGELOG entry. You can find the current version at <a href="${changelogLink}">CHANGELOG.md</a>`);
    }


    // Check for version update
    const hasPackageJsonChanged = danger.git.modified_files.includes('package.json');
    const packageDiff = danger.git.JSONDiffForFile('package.json');

    packageDiff.then(result => {
        if (!hasPackageJsonChanged || (hasPackageJsonChanged && !result.version)) {
            const semverLink = 'https://docs.npmjs.com/getting-started/semantic-versioning';
            /* eslint-disable no-console */console.log('Versioning Missing'); console.log(hasPackageJsonChanged, result);/* eslint-enable no-console */
            fail(`:exclamation: This PR should include a <a href="${semverLink}">SEMVER</a> version bump, so that it can be published once merged.`);
        }
    }, err => {
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
    });

    // Message on deletions
    if (danger.github.pr.deletions > danger.github.pr.additions) {
        message(':fire: :clap: You’re a deletion machine!');
    }
}
