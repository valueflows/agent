module.exports = {
  id: 'RelationshipType',
  collection: 'relationshipTypes',
  prefixes: require('./prefixes'),
  description: 'A type of relationship between multiple agents.',
  context: 'hol:RelationshipType',
  properties: {
    name: {
      description: 'The name of the type of agent relationship.',
      context: 'schema:name',
      type: 'string'
    },
    pluralName: {
      description: 'A plural name for the type of agent relationship.',
      context: 'skos:altLabel',
      type: 'string'
    },
    description: {
      description: 'A description of the type of agent relationship.',
      context: 'schema:description',
      type: 'string'
    },
    roleTypes: {
      description: 'The types of roles within this relationship type.',
      context: 'hol:roleType',
      type: 'array',
      items: {
        $ref: 'RoleType'
      },
      get: {
        deps: ['$roleTypes'],
        fn: function (allRoleTypes) {
          return allRoleTypes
          .find({
            path: ['relationshipType'],
            eq: this.id
          })
        }
      }
    }
  }
}
