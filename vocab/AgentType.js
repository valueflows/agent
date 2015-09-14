module.exports = {
  id: 'AgentType',
  prefixes: require('./prefixes'),
  description: 'A type of agent.',
  context: 'rdfs:Class',
  properties: {
    id: {
      context: '@id',
      description: 'The identifier of the agent type.',
      type: 'string',
      format: 'uri',
      required: true
    },
    type: {
      context: '@type',
      type: 'string',
      enum: ['AgentType'],
      required: true
    },
    subTypeOf: {
      context: 'rdfs:subClassOf',
      description: 'The type that this type is a subtype of.',
      $ref: 'AgentType'
    },
    name: {
      context: 'rdfs:label',
      description: 'The primary name of the agent type.',
      type: 'string'
    },
    description: {
      context: 'rdfs:comment',
      description: 'A description of the agent type.',
      type: 'string'
    }
  }
}
