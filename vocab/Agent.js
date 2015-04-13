module.exports = {
  id: 'Agent',
  collection: 'agents',
  prefixes: require('./prefixes'),
  context: 'foaf:Agent',
  description: 'A thing with the power to act.',
  properties: {
    name: {
      context: 'schema:name',
      description: 'The primary name of the agent.',
      type: 'string'
    },
    description: {
      context: 'schema:description',
      description: 'A short description of the agent.',
      type: 'string'
    },
    image: {
      context: 'schema:image',
      description: 'An avatar of the agent.',
      type: 'string',
      format: 'uri'
    },
    roles: {
      context: 'hol:hasRole',
      description: 'The roles the agent is in.',
      type: 'array',
      items: {
        $ref: 'Role'
      },
      get: {
        deps: ['$roles'],
        fn: function (allRoles) {
          return allRoles
          .find({
            path: ['agent'],
            eq: this.id
          })
        }
      }
    },
    relationships: {
      context: 'hol:hasRelationship',
      description: 'The relationships the agent has with other agents.',
      type: 'array',
      items: {
        $ref: 'Relationship'
      },
      get: {
        deps: ['@roles'],
        fn: function (myRoles) {
          return myRoles
          .map(function (role) {
            return role.relationship
          })
          .filter(function (rel) {
            return rel
          })
        }
      }
    },
    groups: {
      context: 'schema:memberOf',
      description: 'The groups the agent is a member of.',
      type: 'array',
      items: {
        $ref: 'Agent'
      },
      get: {
        deps: ['@relationships'],
        fn: function (myRelationships) {
          // from this agent's relationships
          return myRelationships
          // that have relationship type with name 'membership',
          .find({
            path: ['type', 'name'],
            eq: 'membership'
          })
          // return agent in group role
          .map(function (rel) {
            return rel.roles.findOne({
              path: ['type', 'name'],
              eq: 'group'
            }).get('agent')
          })
        }
      }
    }
  }
}
