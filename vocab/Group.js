module.exports = {
  allOf: [{
    $ref: 'Agent'
  }, {
    id: 'Group',
    collection: 'groups',
    prefixes: require('./prefixes'),
    context: 'schema:Organization',
    description: 'A collection of agents with the power to act as one.',
    properties: {
      name: {
        description: 'The primary name of the group.'
      },
      description: {
        description: 'A short description of the group.'
      },
      image: {
        description: 'An avatar that represents the group.'
      },
      roles: {
        description: 'The roles the group is in.'
      },
      relationships: {
        description: 'The relationships the group has with other agents.'
      },
      members: {
        context: 'schema:member',
        description: 'The agents the group has as members.',
        type: 'array',
        items: {
          $ref: 'Agent'
        },
        get: {
          deps: ['@relationships'],
          fn: function (myRelationships) {
            // from this group's relationships
            return myRelationships
            // that have relationship type with name 'membership',
            .filter(function (rel) {
              return rel.type.name === 'membership'
            })
            // return agent in member role
            .map(function (rel) {
              return rel.roles.findOne({
                name: {
                  eq: 'member'
                }
              }).agent
            })
          }
        }
      }
    }
  }]
}
