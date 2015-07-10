module.exports = {
  allOf: [{
    $ref: 'Agent'
  }, {
    id: 'Person',
    collection: 'people',
    prefixes: require('./prefixes'),
    context: 'schema:Person',
    description: 'A biological being with the power to act.',
    properties: {
      name: {
        description: 'The preferred name of the person.'
      },
      description: {
        description: 'A short bio about the person.'
      },
      image: {
        description: 'An avatar to represent the person.'
      },
      roles: {
        description: 'The roles the person is in.'
      },
      relationships: {
        description: 'The relationships the person has with other agents.'
      },
      groups: {
        description: 'The groups the person is a member of.'
      }
    }
  }]
}
