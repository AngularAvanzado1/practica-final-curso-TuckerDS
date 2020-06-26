module.exports = {
  name: 'worldbank',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/worldbank',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
