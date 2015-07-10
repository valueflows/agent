module.exports = {
  id: 'RoleType',
  collection: 'roleTypes',
  prefixes: require('./prefixes'),
  description: 'A type of role for an agent.',
  context: 'hol:RoleType',
  properties: {
    name: {
      description: 'The name of the type of agent role.',
      context: 'schema:name',
      type: 'string'
    },
    pluralName: {
      description: 'A plural name for the type of agent role.',
      context: 'skos:altLabel',
      type: 'string'
    },
    label: {
      description: 'A label of the type of agent role.',
      context: 'schema:description',
      type: 'string'
    }
  }
}
