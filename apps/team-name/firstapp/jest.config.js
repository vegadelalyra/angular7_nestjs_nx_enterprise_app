module.exports = {
  name: 'team-name-firstapp',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/team-name/firstapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
