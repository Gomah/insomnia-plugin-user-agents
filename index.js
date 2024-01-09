const UserAgent = require('user-agents');

module.exports.templateTags = [
  {
    name: 'UserAgent',
    displayName: 'UserAgent',
    description: 'A plugin for generating user agents',
    args: [
      {
        displayName: 'Device Category',
        description: 'Generate a user agent based on a device category',
        type: 'enum',
        options: [
          {
            displayName: 'Any',
            value: 'any',
          },
          {
            displayName: 'Desktop',
            value: 'desktop',
          },
          {
            displayName: 'Tablet',
            value: 'tablet',
          },
          {
            displayName: 'Mobile',
            value: 'mobile',
          },
        ],
      },
    ],
    run(context, deviceCategory) {
      const props = {};
      if (deviceCategory && deviceCategory !== 'any') {
        Object.assign(props, { deviceCategory });
      }

      return new UserAgent(props).toString();
    },
  },
];
