module.exports = {
  name: 'external-map',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/external-map',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
